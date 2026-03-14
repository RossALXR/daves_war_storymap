const imageManifest = {
  1: "images/1_SS_Dempo_1941.jpg",
  2: "images/2_8th_Army_Clasp.jpg",
  3: "images/3_Dave_Alexandria_received_1941.jpg",
  4: "images/4_Uniform_Badges_Operation_Crusader.jpg",
  5: "images/5_Matilda_tanks_Tobruk_Libya_18_November_1941.jpg",
  6: "images/6_Letter_to_mom_1942.jpg",
  8: "images/8_Smuts_Nov_1942.jpg",
  21: "images/21_Solum_Bay_Offloading_water.jpg",
  23: "images/23_Egypt1943.jpg",
  24: "images/24_AfricaStar.jpg",
  25: "images/25_Dave_Africa_Service_Medal.jpg",
  31: "images/31_8th_Army_Base_Romano_Region_1944.jpg",
  32: "images/32_eighth_army_advance_British_tank_September_1944.webp",
  33: "images/33_Po_waiting_2.jpg",
  34: "images/34_Beyond_the_Po_River.jpg",
  35: "images/35_Venice.jpg",
  36: "images/36_Lignano.jpg",
  37: "images/37_Undine.jpg",
  38: "images/38_Triest.jpg",
  39: "images/39_Germany_Out_News_1945.jpg",
  40: "images/40_Dave_Defence_Medals.jpg",
  41: "images/41_1939_1945_Star.jpg",
  42: "images/42_Dave_193_1945Medal.jpg",
  43: "images/43_Dispatch_Rider_delivering_message.jpg",
  44: "images/44_Dog_Tag_Dave.jpg",
  45: "images/45_Five_Chevrons_5yearsService_Dave.jpg",
  46: "images/46_Italy_Star_dave.jpg",
  47: "images/47_SA_Soldiers_Liguiria_Italy.jpg"
};

const routedPathFiles = [
  {
    key: "libyaRoute",
    file: "route_libya.geojson"
  },
  {
    key: "italyRoute",
    file: "route_italy.geojson"
  }
];

const stops = [
  {
    id: 1,
    title: "Port Suez",
    subtitle: "6-May-41",
    coords: [29.96785974, 32.55013641],
    caption: "Army cards",
    text: "He arrived on SS Dempo from Durban",
    drawLineAfterPoint: true
  },
  {
    id: 2,
    title: "Cairo",
    subtitle: "Sep-41",
    coords: [30.04400182, 31.23544934],
    caption: "8th Army Clasp",
    text: "8th Army headquarters established in Cairo",
    drawLineAfterPoint: true
  },
  {
    id: 3,
    title: "Alexandria",
    subtitle: "Oct-41",
    coords: [31.20381932, 29.91504835],
    caption: "Photo to Mom",
    text: "His Mom noted 'received 22/11/41 Alexandria on photo'",
    drawLineAfterPoint: true
  },
  {
    id: 4,
    title: "El Alemein",
    subtitle: "18-Nov-41",
    coords: [30.84475347, 28.94164793],
    caption: "Crusader Badge",
    text: "Operation Crusader - the battle at El Alemein was won by 25/11/1941",
    drawLineAfterPoint: false
  },
  {
    id: 5,
    title: "Bir Hacheim",
    subtitle: "4-Feb-42",
    coords: [31.601033, 23.475565],
    caption: "8th Army Clasp",
    text: "8th Army had advanced and re-grouped here",
    drawLineAfterPoint: false
  },
  {
    id: 6,
    title: "Bir Hacheim",
    subtitle: "19-May-42",
    coords: [31.601033, 23.475565],
    caption: "Letter to mom",
    text: "Letter posted home via APO (Army Post Office)",
    drawLineAfterPoint: false
  },
  {
    id: 7,
    title: "Gazala",
    subtitle: "21-Jun-42",
    coords: [31.59204253, 23.48503074],
    caption: "8th Army Clasp",
    text: "Battle of Gazala - 8th Army were forced to retreat back to Alamein",
    drawLineAfterPoint: false
  },
  {
    id: 8,
    title: "El Alemein",
    subtitle: "11-Nov-42",
    coords: [30.84180761, 28.94095283],
    caption: "8th Army Clasp",
    text: "2nd battle of El Alamein. The Axis army of Italy and Germany defeated",
    drawLineAfterPoint: false
  },
  {
    id: 10,
    title: "El-Hamma",
    subtitle: "20-Mar-43",
    coords: [33.887485, 9.795094],
    caption: "8th Army Clasp",
    text: "8th Army advanced to push Rommel's troops out of Tunisia",
    drawLineAfterPoint: false
  },
  {
    id: 11,
    title: "Wadi al-'Akarit",
    subtitle: "6-Apr-43",
    coords: [34.112678, 9.982838],
    caption: "8th Army Clasp",
    text: "8th Army advanced to push Rommel's troops out of Tunisia",
    drawLineAfterPoint: false
  },
  {
    id: 12,
    title: "Enfidha",
    subtitle: "20-Apr-43",
    coords: [36.133847, 10.378048],
    caption: "8th Army Clasp",
    text: "8th Army advanced to push Rommel's troops out of Tunisia",
    drawLineAfterPoint: false
  },
  {
    id: 13,
    title: "Medjerda",
    subtitle: "6-May-43",
    coords: [37.06292, 10.068617],
    caption: "8th Army Clasp",
    text: "Rommel's forces surrendered on 13 May 1943",
    drawLineAfterPoint: false
  },
  {
    id: 14,
    title: "Tunis",
    subtitle: "15-May-43",
    coords: [36.8065, 10.1815],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo",
    drawLineAfterPoint: false
  },
  {
    id: 15,
    title: "Sfax (near Gabes)",
    subtitle: "16-May-43",
    coords: [34.7406, 10.7603],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo",
    drawLineAfterPoint: false
  },
  {
    id: 16,
    title: "Gabes",
    subtitle: "17-May-43",
    coords: [33.8815, 10.0982],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo",
    drawLineAfterPoint: false
  },
  {
    id: 17,
    title: "Tripoli",
    subtitle: "18-May-43",
    coords: [32.8872, 13.1913],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo",
    drawLineAfterPoint: false
  },
  {
    id: 18,
    title: "El Agheila",
    subtitle: "19-May-43",
    coords: [30.2467, 19.2047],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo",
    drawLineAfterPoint: false
  },
  {
    id: 19,
    title: "Benghazi",
    subtitle: "20-May-43",
    coords: [32.1167, 20.0667],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo",
    drawLineAfterPoint: false
  },
  {
    id: 20,
    title: "Tobruk",
    subtitle: "21-May-43",
    coords: [32.0836, 23.9764],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo",
    drawLineAfterPoint: false
  },
  {
    id: 21,
    title: "Sollum",
    subtitle: "22-May-43",
    coords: [31.5539, 25.1589],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo",
    drawLineAfterPoint: false
  },
  {
    id: 22,
    title: "Mersa Matruh",
    subtitle: "23-May-43",
    coords: [31.3543, 27.2373],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo",
    drawLineAfterPoint: false
  },
  {
    id: 23,
    title: "Alexandria",
    subtitle: "24-May-43",
    coords: [31.2001, 29.9187],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo",
    drawLineAfterPoint: false
  },
  {
    id: 24,
    title: "Cairo",
    subtitle: "25-May-43",
    coords: [30.0444, 31.2357],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo",
    drawLineAfterPoint: false
  },
  {
    id: 25,
    title: "Khatatba",
    subtitle: "26-May-43",
    coords: [30.525, 30.82],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo",
    drawLineAfterPoint: true
  },
  {
    id: 26,
    title: "Port Suez",
    subtitle: "12-Jul-43",
    coords: [29.96785974, 32.55013641],
    caption: "Army cards",
    text: "Embarked for Durban on Home leave",
    drawLineAfterPoint: true
  },
  {
    id: 27,
    title: "Port Suez",
    subtitle: "6-Nov-43",
    coords: [29.96785974, 32.55013641],
    caption: "Army cards",
    text: "Disembarked from SS Orford (from Durban) after Home Leave",
    drawLineAfterPoint: true
  },
  {
    id: 28,
    title: "Cairo",
    subtitle: "16-Dec-43",
    coords: [30.04400182, 31.23544934],
    caption: "Army cards",
    text: "Transferred to Citizen Military to prepare to leave for Italy",
    drawLineAfterPoint: true
  },
  {
    id: 29,
    title: "Helwan",
    subtitle: "1-Jan-44",
    coords: [29.8434256, 31.330921],
    caption: "Army cards",
    text: "Admitted to Hospital No5 after accidental injury (bike accident)",
    drawLineAfterPoint: true
  },
  {
    id: 30,
    title: "Alexandria",
    subtitle: "27-May-44",
    coords: [31.20381932, 29.91504835],
    caption: "Army cards",
    text: "Discharged from Hospital to Base and left for Italy",
    drawLineAfterPoint: true
  },
  {
    id: 31,
    title: "Reggio di Calabria",
    subtitle: "1-Jun-44",
    coords: [38.1106545, 15.64286765],
    caption: "8th Army Clasp",
    text: "8th Army troops landed at this port after Alexandria",
    drawLineAfterPoint: false
  },
  {
    id: 32,
    title: "Coriano",
    subtitle: "13-Sep-44",
    coords: [43.962139, 12.60289],
    caption: "8th Army Clasp",
    text: "8th Army broke through the Gothic Defence line after this battle",
    drawLineAfterPoint: false
  },
  {
    id: 33,
    title: "Emelia Romano Region",
    subtitle: "1-Mar-45",
    coords: [44.51767399, 11.27713028],
    caption: "Italy visit",
    text: "Army base was in this region and Dave wanted to visit here in 1984",
    drawLineAfterPoint: false
  },
  {
    id: 34,
    title: "Po River at Ferrara",
    subtitle: "28-Apr-45",
    coords: [44.888187, 11.618976],
    caption: "Propaganda leaflet",
    text: "The Eighth Army crossed the Po River",
    drawLineAfterPoint: false
  },
  {
    id: 35,
    title: "Venice",
    subtitle: "2-May-45",
    coords: [45.43959563, 12.32000556],
    caption: "Post cards",
    text: "8th Army advanced pushing out German troops",
    drawLineAfterPoint: false
  },
  {
    id: 36,
    title: "Lignano Sabbiadoro",
    subtitle: "4-May-45",
    coords: [45.6620536, 13.10727859],
    caption: "Post cards",
    text: "8th Army advanced pushing out German troops",
    drawLineAfterPoint: false
  },
  {
    id: 37,
    title: "Udine",
    subtitle: "6-May-45",
    coords: [46.07158986, 13.22734407],
    caption: "Post cards",
    text: "8th Army advanced pushing out German troops",
    drawLineAfterPoint: false
  },
  {
    id: 38,
    title: "Trieste",
    subtitle: "8-May-45",
    coords: [45.65063026, 13.7664945],
    caption: "Newspaper",
    text: "Germany OUT!",
    drawLineAfterPoint: true
  },
  {
    id: 39,
    title: "Cairo - Enplaned for Union",
    subtitle: "8-Aug-45",
    coords: [30.04551445, 31.23700314],
    caption: "Army cards",
    text: "Demobilised - end of war",
    drawLineAfterPoint: true
  },
  {
    id: 40,
    title: "Nairobi",
    subtitle: "9-Aug-45",
    coords: [-1.29630618, 36.82677128],
    caption: "Newspaper",
    text: "Plane in Nairobi to re-fuel on the way to South Africa",
    drawLineAfterPoint: false,
    routeFromPrev: [
      [30.04551445, 31.23700314],
      [29.2, 32.4],
      [27.9, 33.6],
      [26.1, 34.8],
      [23.8, 36.0],
      [20.9, 37.3],
      [17.2, 38.5],
      [13.0, 39.6],
      [8.7, 40.5],
      [4.2, 40.8],
      [0.5, 39.8],
      [-1.29630618, 36.82677128]
    ]
  }
];