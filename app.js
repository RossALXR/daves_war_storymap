const map = L.map("map", {
  zoomSnap: 0.1,
  zoomDelta: 0.25,
  inertia: true
});

L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
  {
    attribution: "Tiles © Esri",
    maxZoom: 19
  }
).addTo(map);

const DEFAULT_CENTER = [38.3, 21.7];
const DEFAULT_ZOOM = 4.9;
map.setView(DEFAULT_CENTER, DEFAULT_ZOOM);

const routedLayer = L.layerGroup().addTo(map);
const markerLayer = L.layerGroup().addTo(map);

const loadedRoutedPaths = [];

let activeMarker = null;
let index = 0;

const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");
const captionEl = document.getElementById("caption");
const textEl = document.getElementById("text");
const counterEl = document.getElementById("counter");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const timelineSlider = document.getElementById("timelineSlider");
const sliderStopLabel = document.getElementById("sliderStopLabel");
const sliderDateLabel = document.getElementById("sliderDateLabel");

const yearTicksEl = document.getElementById("yearTicks");

const storyImageEl = document.getElementById("storyImage");
const imagePlaceholderEl = document.getElementById("imagePlaceholder");

timelineSlider.max = stops.length - 1;



function parseYear(value) {
  if (!value) return null;

  const text = String(value).trim();

  const match4 = text.match(/(19\d{2}|20\d{2})/);
  if (match4) return parseInt(match4[1], 10);

  const match2 = text.match(/-(\d{2})$/);
  if (match2) {
    const yy = parseInt(match2[1], 10);
    return yy >= 40 ? 1900 + yy : 2000 + yy;
  }

  return null;
}



function buildYearTicks() {
  yearTicksEl.innerHTML = "";

  const yearPositions = new Map();

  stops.forEach((stop, i) => {
    const y = parseYear(stop.subtitle);

    if (y !== null && !yearPositions.has(y)) {
      yearPositions.set(y, i);
    }
  });

  const total = Math.max(stops.length - 1, 1);

  Array.from(yearPositions.entries()).forEach(([year, stopIndex]) => {
    const tick = document.createElement("div");

    tick.className = "year-tick";
    tick.style.left = `${(stopIndex / total) * 100}%`;
    tick.textContent = year;

    yearTicksEl.appendChild(tick);
  });
}



function loadStoryImage(stop, i) {
  const fallbackLabel = stop.imageLabel || `Image ${i + 1}`;

  let imagePath =
    stop.image ||
    stop.imageUrl ||
    stop.photo ||
    "";

  if (!imagePath && stop.id && typeof imageManifest !== "undefined") {
    imagePath = imageManifest[stop.id] || "";
  }

  storyImageEl.onload = null;
  storyImageEl.onerror = null;

  if (imagePath) {
    storyImageEl.src = imagePath;

    storyImageEl.onload = () => {
      storyImageEl.style.display = "block";
      imagePlaceholderEl.style.display = "none";
    };

    storyImageEl.onerror = () => {
      storyImageEl.style.display = "none";
      imagePlaceholderEl.style.display = "flex";
      imagePlaceholderEl.textContent = `${fallbackLabel} not found`;
    };

  } else {

    storyImageEl.removeAttribute("src");
    storyImageEl.style.display = "none";

    imagePlaceholderEl.style.display = "flex";
    imagePlaceholderEl.textContent = fallbackLabel;
  }
}



async function loadRoutedPaths() {

  if (typeof routedPathFiles === "undefined") return;

  for (const item of routedPathFiles) {

    try {

      const response = await fetch(item.file);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} loading ${item.file}`);
      }

      const geojson = await response.json();

      loadedRoutedPaths.push({
        key: item.key,
        file: item.file,
        geojson
      });

    } catch (err) {

      console.error("Failed to load routed path:", item.file, err);

    }
  }
}



function drawRoutedGeoJson() {

  routedLayer.clearLayers();

  loadedRoutedPaths.forEach(path => {

    const layer = L.geoJSON(path.geojson, {
      style: {
        color: "#000000",
        weight: 4,
        opacity: 1,
        dashArray: "3 7",
        lineCap: "butt",
        lineJoin: "round"
      },
      interactive: false
    });

    layer.addTo(routedLayer);

  });

  routedLayer.bringToFront();
  markerLayer.bringToFront();

  markers.forEach(marker => {
    if (marker.bringToFront) marker.bringToFront();
  });

  if (activeMarker) activeMarker.bringToFront();
}



function styleMarkers(currentIndex) {

  markers.forEach((marker, i) => {

    if (i < currentIndex) {

      marker.setStyle({
        radius: 4.5,
        color: "#8b1e1e",
        weight: 1,
        fillColor: "#c63c22",
        fillOpacity: 0.35,
        opacity: 0.45
      });

    } else if (i === currentIndex) {

      marker.setStyle({
        radius: 0,
        color: "#8b1e1e",
        weight: 0,
        fillColor: "#c63c22",
        fillOpacity: 0,
        opacity: 0
      });

    } else {

      marker.setStyle({
        radius: 5,
        color: "#8b1e1e",
        weight: 1,
        fillColor: "#c63c22",
        fillOpacity: 0.9,
        opacity: 0.9
      });

    }
  });
}



function updateMapViewForStop(i, firstLoad = false) {

  const stop = stops[i];

  const isLastStop = i === stops.length - 1;
  const isNairobi = (stop.title || "").toLowerCase() === "nairobi";

  if (isLastStop || isNairobi) {

    const cairoStop = stops.find(s =>
      (s.title || "").toLowerCase().startsWith("cairo")
    );

    if (cairoStop) {

      const bounds = L.latLngBounds([
        stop.coords,
        cairoStop.coords
      ]);

      map.fitBounds(bounds, {
        padding: [40, 40],
        animate: !firstLoad,
        duration: 1.2
      });

      return;
    }
  }

  if (firstLoad) {

    map.setView(DEFAULT_CENTER, DEFAULT_ZOOM, { animate: false });

  } else {

    map.flyTo(DEFAULT_CENTER, DEFAULT_ZOOM, {
      animate: true,
      duration: 1
    });

  }
}



function updateActiveMarker(stop) {

  if (activeMarker) {
    map.removeLayer(activeMarker);
  }

  activeMarker = L.marker(stop.coords, {
    icon: L.divIcon({
      className: "",
      html: `<div class="pulse-marker"></div>`,
      iconSize: [18, 18],
      iconAnchor: [9, 9]
    }),
    zIndexOffset: 1000
  }).addTo(map);

  activeMarker.bringToFront();
  markerLayer.bringToFront();
}



const markers = stops.map((stop, i) => {

  const marker = L.circleMarker(stop.coords, {
    radius: 5,
    color: "#8b1e1e",
    weight: 1,
    fillColor: "#c63c22",
    fillOpacity: 0.9,
    opacity: 0.9,
    pane: "markerPane"
  }).bindPopup(
    `<b>${i + 1}. ${stop.title}</b><br>${stop.subtitle}`
  );

  marker.addTo(markerLayer);

  if (marker.bringToFront) marker.bringToFront();

  return marker;
});



function showStop(i, firstLoad = false) {

  const stop = stops[i];

  titleEl.innerText = stop.title || "";
  subtitleEl.innerText = stop.subtitle || "";
  captionEl.innerText = stop.caption || "";
  textEl.innerText = stop.text || "";

  counterEl.innerText = `Stop ${i + 1} of ${stops.length}`;

  sliderStopLabel.innerText = `Stop ${i + 1} of ${stops.length}`;
  sliderDateLabel.innerText = stop.subtitle || "";

  timelineSlider.value = i;

  loadStoryImage(stop, i);

  updateMapViewForStop(i, firstLoad);
  updateActiveMarker(stop);
  styleMarkers(i);

  markers[i].openPopup();

  prevBtn.disabled = (i === 0);
  nextBtn.disabled = (i === stops.length - 1);
}



function goToStop(i, firstLoad = false) {
  index = i;
  showStop(index, firstLoad);
}



nextBtn.onclick = () => {
  if (index < stops.length - 1) {
    goToStop(index + 1);
  }
};



prevBtn.onclick = () => {
  if (index > 0) {
    goToStop(index - 1);
  }
};



timelineSlider.addEventListener("input", (e) => {
  goToStop(parseInt(e.target.value, 10));
});



async function initialiseStoryMap() {

  buildYearTicks();

  await loadRoutedPaths();

  drawRoutedGeoJson();

  goToStop(0, true);
}



initialiseStoryMap();