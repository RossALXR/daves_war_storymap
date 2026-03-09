const imageManifest = {
  1: "images/1_SS Dempo - Liverpool March 1941.jpg",
  2: "images/2_8th Army Clasp.jpg",
  3: "images/3_Dave -Alexandria his mom received 22-11-1941.jpg",
  4: "images/4_Uniform Badges- Operation Crusader.jpg",
  5: "images/5_Matilda_tanks__Tobruk,_Libya,_18_November_1941.jpg",
  6: "images/6_Letter to mom 19 May 1942.jpg",
  8: "images/8_Smuts in Western Desert20-23 Nov 1942.jpg",
  21: "images/21_Solum Bay Offloading water.jpg",
  23: "images/23_Egypt 1943.jpg",
  24: "images/24_Africa Star.jpg",
  25: "images/25_Dave- Africa Service Medal.jpg",
  31: "images/31_8th Army Base in Emelia Romano Region 1944.jpg",
  32: "images/32_eighth-army-advance-British-tank-gun-River-Foglia-Italy-September-1944.webp",
  33: "images/33_Po is waiting for You 2.jpg",
  34: "images/34_Beyond the Po River.jpg",
  35: "images/35_Venice.jpg",
  36: "images/36_Lignano.jpg",
  37: "images/37_Undine.jpg",
  38: "images/38_Triest.jpg",
  39: "images/39_Germany Out - News 8 May 1945.jpg",
  40: "images/40_Dave - Defence Medals.jpg",
  41: "images/41_1939-1945 Star.jpg",
  42: "images/42_Dave 1939-1945 Medal.jpg",
  43: "images/43_Dispatch Rider delivering a message.jpg",
  44: "images/44_Dog Tag - Dave.jpg",
  45: "images/45_Five Chevrons for 5 years Service- Dave.jpg",
  46: "images/46_Italy Star - dave.jpg",
  47: "images/47_SA Soldiers in Liguria Italy.jpg"
};

const stops = [
  {
    id: 1,
    title: "Port Suez",
    subtitle: "6-May-41",
    coords: [29.96785974, 32.55013641],
    caption: "Army cards",
    text: "He arrived on SS Dempo from Durban"
  },
  {
    id: 2,
    title: "Cairo",
    subtitle: "Sep-41",
    coords: [30.04400182, 31.23544934],
    caption: "8th Army Clasp",
    text: "8th Army headquarters established in Cairo"
  },
  {
    id: 3,
    title: "Alexandria",
    subtitle: "Oct-41",
    coords: [31.20381932, 29.91504835],
    caption: "Photo to Mom",
    text: "His mom noted 'received 22/11/41 Alexandria on photo'"
  },
  {
    id: 4,
    title: "El Alamein",
    subtitle: "18-Nov-41",
    coords: [30.84475347, 28.94164793],
    caption: "Crusader Badge",
    text: "Operation Crusader - the battle at El Alamein was won by 25/11/1941"
  },
  {
    id: 5,
    title: "Bir Hacheim",
    subtitle: "4-Feb-42",
    coords: [31.601033, 23.475565],
    caption: "8th Army Clasp",
    text: "8th Army had advanced and re-grouped here"
  },
  {
    id: 6,
    title: "Bir Hacheim",
    subtitle: "19-May-42",
    coords: [31.601033, 23.475565],
    caption: "Letter to mom",
    text: "Letter posted home via APO (Army Post Office)"
  },
  {
    id: 7,
    title: "Gazala",
    subtitle: "21-Jun-42",
    coords: [31.59204253, 23.48503074],
    caption: "8th Army Clasp",
    text: "Battle of Gazala - 8th Army were forced to retreat back to Alamein"
  },
  {
    id: 8,
    title: "El Alamein",
    subtitle: "11/11/1942",
    coords: [30.84180761, 28.94095283],
    caption: "Smuts in Western Desert",
    text: "2nd battle of El Alamein. The Axis army of Italy and Germany defeated"
  },
  {
    id: 10,
    title: "El-Hamma",
    subtitle: "20-Mar-43",
    coords: [33.887485, 9.795094],
    caption: "8th Army Clasp",
    text: "8th Army advanced to push Rommel's troops out of Tunisia"
  },
  {
    id: 11,
    title: "Wadi al-'Akarit",
    subtitle: "6-Apr-43",
    coords: [34.112678, 9.982838],
    caption: "8th Army Clasp",
    text: "8th Army advanced to push Rommel's troops out of Tunisia"
  },
  {
    id: 12,
    title: "Enfidha",
    subtitle: "20-Apr-43",
    coords: [36.133847, 10.378048],
    caption: "8th Army Clasp",
    text: "8th Army advanced to push Rommel's troops out of Tunisia"
  },
  {
    id: 13,
    title: "Medjerda",
    subtitle: "6-May-43",
    coords: [37.06292, 10.068617],
    caption: "8th Army Clasp",
    text: "Rommel's forces surrendered on 13 May 1943"
  },
  {
    id: 14,
    title: "Tunis",
    subtitle: "5/15/1943",
    coords: [36.8065, 10.1815],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    id: 15,
    title: "Sfax (near Gabes)",
    subtitle: "5/16/1943",
    coords: [34.7406, 10.7603],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    id: 16,
    title: "Gabes",
    subtitle: "5/17/1943",
    coords: [33.8815, 10.0982],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    id: 17,
    title: "Tripoli",
    subtitle: "5/18/1943",
    coords: [32.8872, 13.1913],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    id: 18,
    title: "El Agheila",
    subtitle: "5/19/1943",
    coords: [30.2467, 19.2047],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    id: 19,
    title: "Benghazi",
    subtitle: "5/20/1943",
    coords: [32.1167, 20.0667],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    id: 20,
    title: "Tobruk",
    subtitle: "5/21/1943",
    coords: [32.0836, 23.9764],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    id: 21,
    title: "Sollum",
    subtitle: "5/22/1943",
    coords: [31.5539, 25.1589],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    id: 22,
    title: "Mersa Matruh",
    subtitle: "5/23/1943",
    coords: [31.3543, 27.2373],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    id: 23,
    title: "Alexandria",
    subtitle: "5/24/1943",
    coords: [31.2001, 29.9187],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    id: 24,
    title: "Cairo",
    subtitle: "5/25/1943",
    coords: [30.0444, 31.2357],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    id: 25,
    title: "Khatatba",
    subtitle: "5/26/1943",
    coords: [30.525, 30.82],
    caption: "27th Rd Con Unit",
    text: "Journey back to Cairo"
  },
  {
    id: 26,
    title: "Port Suez",
    subtitle: "7/12/1943",
    coords: [29.96785974, 32.55013641],
    caption: "Army cards",
    text: "Embarked for Durban on Home leave"
  },
  {
    id: 27,
    title: "Port Suez",
    subtitle: "11/6/1943",
    coords: [29.96785974, 32.55013641],
    caption: "Army cards",
    text: "Disembarked from SS Orford (from Durban) after Home Leave"
  },
  {
    id: 28,
    title: "Cairo",
    subtitle: "12/16/1943",
    coords: [30.04400182, 31.23544934],
    caption: "Army cards",
    text: "Transferred to Citizen Military to prepare to leave for Italy"
  },
  {
    id: 29,
    title: "Helwan",
    subtitle: "1/1/1944",
    coords: [29.8434256, 31.330921],
    caption: "Army cards",
    text: "Admitted to Hospital No5 after Accidental Injury (Bike accident)"
  },
  {
    id: 30,
    title: "Alexandria",
    subtitle: "5/27/1944",
    coords: [31.20381932, 29.91504835],
    caption: "Army cards",
    text: "Discharged from Hospital to Base and left for Italy"
  },
  {
    id: 31,
    title: "Reggio di Calabria",
    subtitle: "1-Jun-44",
    coords: [38.1106545, 15.64286765],
    caption: "8th Army Clasp",
    text: "8th Army troops landed at this port after Alexandria"
  },
  {
    id: 32,
    title: "Coriano",
    subtitle: "9/13/1944",
    coords: [43.962139, 12.60289],
    caption: "8th Army Clasp",
    text: "8th Army broke through the Gothic Defence line after this battle"
  },
  {
    id: 33,
    title: "Emelia Romano Region",
    subtitle: "3/1/1945",
    coords: [44.51767399, 11.27713028],
    caption: "Italy visit",
    text: "Army base was in this region and Dave wanted to visit here in 1984"
  },
  {
    id: 34,
    title: "Po River at Ferrara",
    subtitle: "4/28/1945",
    coords: [44.888187, 11.618976],
    caption: "Propaganda leaflet",
    text: "The Eighth Army crossed the Po River"
  },
  {
    id: 35,
    title: "Venice",
    subtitle: "5/2/1945",
    coords: [45.43959563, 12.32000556],
    caption: "Post cards",
    text: "8th Army advanced pushing out German troops"
  },
  {
    id: 36,
    title: "Lignano Sabbiadoro",
    subtitle: "5/4/1945",
    coords: [45.6620536, 13.10727859],
    caption: "Post cards",
    text: "8th Army advanced pushing out German troops"
  },
  {
    id: 37,
    title: "Udine",
    subtitle: "5/6/1945",
    coords: [46.07158986, 13.22734407],
    caption: "Post cards",
    text: "8th Army advanced pushing out German troops"
  },
  {
    id: 38,
    title: "Trieste",
    subtitle: "5/8/1945",
    coords: [45.65063026, 13.7664945],
    caption: "Newspaper",
    text: "Germany OUT!"
  },
  {
    id: 39,
    title: "Cairo - Enplaned for Union",
    subtitle: "8/8/1945",
    coords: [30.04551445, 31.23700314],
    caption: "Army cards",
    text: "Demobilised - end of war"
  },
  {
    id: 40,
    title: "Nairobi",
    subtitle: "8/9/1945",
    coords: [-1.29630618, 36.82677128],
    caption: "Newspaper",
    text: "Plane in Nairobi to re-fuel on the way to South Africa"
  }
];