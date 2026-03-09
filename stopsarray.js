const stops = [
  {
    title: "Port Suez",
    subtitle: "6-May-41",
    coords: [29.96785974, 32.55013641],
    imageLabel: "Image 1",
    caption: "army cards",
    text: "He arrived on SS Dempo from Durban"
  },
  {
    title: "Cairo",
    subtitle: "Sep-41",
    coords: [30.04400182, 31.23544934],
    imageLabel: "Image 2",
    caption: "8th Army Clasp",
    text: "8th Army headquarters established in Cairo"
  },
  {
    title: "Alexandria",
    subtitle: "Oct-41",
    coords: [31.20381932, 29.91504835],
    imageLabel: "Image 3",
    caption: "Photo to Mom",
    text: "His Mom noted \"received 22/11/14-Alexandra on photo\""
  },
  {
    title: "El Alemein",
    subtitle: "18-Nov-41",
    coords: [30.84475347, 28.94164793],
    imageLabel: "Image 4",
    caption: "Crusader Badge",
    text: "Operation Crusader - the battle at El Aleman was won by 25/11/1941"
  },
  {
    title: "Bir Hacheim",
    subtitle: "4-Feb-42",
    coords: [31.601033, 23.475565],
    imageLabel: "Image 5",
    caption: "8th Army Clasp",
    text: "8th Army had advanced and re-grouped here"
  },
  {
    title: "Bir Hacheim",
    subtitle: "19-May-42",
    coords: [31.601033, 23.475565],
    imageLabel: "Image 6",
    caption: "letter to mom",
    text: "Letter posted home via APO (Army Post Office)"
  },
  {
    title: "Gazala",
    subtitle: "21-Jun-42",
    coords: [31.59204253, 23.48503074],
    imageLabel: "Image 7",
    caption: "8th Army Clasp",
    text: "Battle of Gazala-8th Army were forced to retreat back to Al Elemein"
  },
  {
    title: "El Alemein",
    subtitle: "11/11/1942",
    coords: [30.84180761, 28.94095283],
    imageLabel: "Image 8",
    caption: "8th Army Clasp",
    text: "2nd battle of El Alamain. The Axis army of Italy and Germany defeated"
  },
  {
    title: "el-Hammah",
    subtitle: "20-Mar-43",
    coords: [33.887485, 9.795094],
    imageLabel: "Image 10",
    caption: "8th Army Clasp",
    text: "8th Army advanced to push Rommels troops out of Tunisia"
  },
  {
    title: "Wādi al-'Akārit",
    subtitle: "6-Apr-43",
    coords: [34.112678, 9.982838],
    imageLabel: "Image 11",
    caption: "8th Army Clasp",
    text: "8th Army advanced to push Rommels troops out of Tunisia"
  },
  {
    title: "Enfidha",
    subtitle: "20-Apr-43",
    coords: [36.133847, 10.378048],
    imageLabel: "Image 12",
    caption: "8th Army Clasp",
    text: "8th Army advanced to push Rommels troops out of Tunisia"
  },
  {
    title: "Medjerda",
    subtitle: "6-May-43",
    coords: [37.06292, 10.068617],
    imageLabel: "Image 13",
    caption: "8th Army Clasp",
    text: "Rommels forces surrendered on 13May 1943"
  },
  {
    title: "Tunis",
    subtitle: "5/15/1943",
    coords: [36.8065, 10.1815],
    imageLabel: "Image 14",
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    title: "Sfax(nearGabes)",
    subtitle: "5/16/1943",
    coords: [34.7406, 10.7603],
    imageLabel: "Image 15",
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    title: "Gabes",
    subtitle: "5/17/1943",
    coords: [33.8815, 10.0982],
    imageLabel: "Image 16",
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    title: "Tripoli",
    subtitle: "5/18/1943",
    coords: [32.8872, 13.1913],
    imageLabel: "Image 17",
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    title: "El Agheila",
    subtitle: "5/19/1943",
    coords: [30.2467, 19.2047],
    imageLabel: "Image 18",
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    title: "Benghazi",
    subtitle: "5/20/1943",
    coords: [32.1167, 20.0667],
    imageLabel: "Image 19",
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    title: "Tobruk",
    subtitle: "5/21/1943",
    coords: [32.0836, 23.9764],
    imageLabel: "Image 20",
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    title: "Sollum",
    subtitle: "5/22/1943",
    coords: [31.5539, 25.1589],
    imageLabel: "Image 21",
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    title: "Mersa Matruh",
    subtitle: "5/23/1943",
    coords: [31.3543, 27.2373],
    imageLabel: "Image 22",
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    title: "Alexandria",
    subtitle: "5/24/1943",
    coords: [31.2001, 29.9187],
    imageLabel: "Image 23",
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    title: "Cairo",
    subtitle: "5/25/1943",
    coords: [30.0444, 31.2357],
    imageLabel: "Image 24",
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    title: "Khatatba",
    subtitle: "5/26/1943",
    coords: [30.525, 30.82],
    imageLabel: "Image 25",
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    title: "Port Suez",
    subtitle: "7/12/1943",
    coords: [29.96785974, 32.55013641],
    imageLabel: "Image 26",
    caption: "Army cards",
    text: "embarked for Durban on Home leave"
  },
  {
    title: "Port Suez",
    subtitle: "11/6/1943",
    coords: [29.96785974, 32.55013641],
    imageLabel: "Image 27",
    caption: "Army cards",
    text: "disembarked from SS Orduna(from Durban) after Home Leave"
  },
  {
    title: "Cairo",
    subtitle: "12/16/1943",
    coords: [30.04400182, 31.23544934],
    imageLabel: "Image 28",
    caption: "Army cards",
    text: "Transferred to Citizen Military to prepare to leave for Italy"
  },
  {
    title: "Helwan",
    subtitle: "1/1/1944",
    coords: [29.8434256, 31.330921],
    imageLabel: "Image 29",
    caption: "Army cards",
    text: "Admitted to Hospital No5 after Accidental Injury(Bike accident)"
  },
  {
    title: "Alexandria",
    subtitle: "5/27/1944",
    coords: [31.20381932, 29.91504835],
    imageLabel: "Image 30",
    caption: "Army cards",
    text: "Discharged from Hospital to Base and left for Italy"
  },
  {
    title: "Reggio de Calabria",
    subtitle: "1-Jun-44",
    coords: [38.1106545, 15.64286765],
    imageLabel: "Image 31",
    caption: "8th Army Clasp",
    text: "8th Army troops landed at this port from Alexandria"
  },
  {
    title: "Coriano",
    subtitle: "9/13/1944",
    coords: [43.962139, 12.60289],
    imageLabel: "Image 32",
    caption: "8th Army Clasp",
    text: "8th army broke through the Gothic Defence line after this battle"
  },
  {
    title: "Emelia Romano Region",
    subtitle: "3/1/1945",
    coords: [44.51767399, 11.27713028],
    imageLabel: "Image 33",
    caption: "Italy visit",
    text: "Army Base was in this region and Dave wanted to visit there in 1984"
  },
  {
    title: "Po River at Ferara",
    subtitle: "4/28/1945",
    coords: [44.888187, 11.618976],
    imageLabel: "Image 34",
    caption: "Propaganda leaflet",
    text: "The Eighth Army crossed the Po River"
  },
  {
    title: "Venice",
    subtitle: "5/2/1945",
    coords: [45.43959563, 12.3200556],
    imageLabel: "Image 35",
    caption: "Post cards",
    text: "8th Army advanced pushing out German troops"
  },
  {
    title: "Lignano Sabbia d'Ora",
    subtitle: "5/4/1945",
    coords: [45.66820536, 13.1072859],
    imageLabel: "Image 36",
    caption: "Post cards",
    text: "8th Army advanced pushing out German troops"
  },
  {
    title: "Udine",
    subtitle: "5/6/1945",
    coords: [46.07158986, 13.22734407],
    imageLabel: "Image 37",
    caption: "Post cards",
    text: "8th Army advanced pushing out German troops"
  },
  {
    title: "Trieste",
    subtitle: "5/8/1945",
    coords: [45.65063026, 13.7664945],
    imageLabel: "Image 38",
    caption: "Newspaper",
    text: "Germany OUT!"
  },
  {
    title: "Cairo-Emplaned for Union",
    subtitle: "8/8/1945",
    coords: [30.04551445, 31.23700314],
    imageLabel: "Image 39",
    caption: "Army cards",
    text: "Demobilised - end of war"
  },
  {
    title: "Nairobi",
    subtitle: "8/9/1945",
    coords: [-1.29630618, 36.82677128],
    imageLabel: "Image 40",
    caption: "newspaper",
    text: "Plane in Nairobi to re-fuel on the way to South Africa"
  }
];