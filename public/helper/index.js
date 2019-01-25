/* Filtering Data from Json */

var Filter_Data = {
  building_conditions: { bc_array: [], er_date: "", ls_date: "" },
  animal_pest: { ap_array: [], er_date: "", ls_date: "" },
  garbage_refuse: { gr_array: [], er_date: "", ls_date: "" },
  unsanitary_cond: { uc_array: [], er_date: "", ls_date: "" },
  vege_tation: { vg_array: [], er_date: "", ls_date: "" },
  chemical_hazards: { ch_array: [], er_date: "", ls_date: "" },
  retail_food: { rf_array: [], er_date: "", ls_date: "" },
  bio_hazards: { bh_array: [], er_date: "", ls_date: "" },
  air_odors: { ao_array: [], er_date: "", ls_date: "" }
};

/* Fetching Data from API */

$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "/api/jsondatacsv",
    data: "data",
    async: false,
    beforeSend: function(xhr) {
      if (xhr && xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json;charset=utf-8");
      }
    },
    dataType: "json",
    success: function(data) {
      //console.log(data);
      //alert("Data Fetched Successfully");

      /* Main logic to find Viloation number, Earliest and Latest date for Viloation Category */

      for (let i = 0; i < data.length; i++) {
        const element = data[i];

        const violation_category = element[2];
        const violation_date = element[3];

        switch (violation_category.toLowerCase()) {
          case "building conditions":
            Filter_Data.building_conditions.bc_array.push(element);
            if (
              Filter_Data.building_conditions.er_date == "" &&
              Filter_Data.building_conditions.ls_date == ""
            ) {
              Filter_Data.building_conditions.er_date = violation_date;
              Filter_Data.building_conditions.ls_date = violation_date;
            } else {
              if (
                new Date(Filter_Data.building_conditions.er_date) >
                new Date(violation_date)
              ) {
                Filter_Data.building_conditions.er_date = violation_date;
              }

              if (
                new Date(Filter_Data.building_conditions.ls_date) <
                new Date(violation_date)
              ) {
                Filter_Data.building_conditions.ls_date = violation_date;
              }
            }
            break;

          case "animals and pests":
            Filter_Data.animal_pest.ap_array.push(element);
            if (
              Filter_Data.animal_pest.er_date == "" &&
              Filter_Data.animal_pest.ls_date == ""
            ) {
              Filter_Data.animal_pest.er_date = violation_date;
              Filter_Data.animal_pest.ls_date = violation_date;
            } else {
              if (
                new Date(Filter_Data.animal_pest.er_date) >
                new Date(violation_date)
              ) {
                Filter_Data.animal_pest.er_date = violation_date;
              }

              if (
                new Date(Filter_Data.animal_pest.ls_date) <
                new Date(violation_date)
              ) {
                Filter_Data.animal_pest.ls_date = violation_date;
              }
            }
            break;

          case "garbage and refuse":
            Filter_Data.garbage_refuse.gr_array.push(element);
            if (
              Filter_Data.garbage_refuse.er_date == "" &&
              Filter_Data.garbage_refuse.ls_date == ""
            ) {
              Filter_Data.garbage_refuse.er_date = violation_date;
              Filter_Data.garbage_refuse.ls_date = violation_date;
            } else {
              if (
                new Date(Filter_Data.garbage_refuse.er_date) >
                new Date(violation_date)
              ) {
                Filter_Data.garbage_refuse.er_date = violation_date;
              }

              if (
                new Date(Filter_Data.garbage_refuse.ls_date) <
                new Date(violation_date)
              ) {
                Filter_Data.garbage_refuse.ls_date = violation_date;
              }
            }
            break;

          case "unsanitary conditions":
            Filter_Data.unsanitary_cond.uc_array.push(element);
            if (
              Filter_Data.unsanitary_cond.er_date == "" &&
              Filter_Data.unsanitary_cond.ls_date == ""
            ) {
              Filter_Data.unsanitary_cond.er_date = violation_date;
              Filter_Data.unsanitary_cond.ls_date = violation_date;
            } else {
              if (
                new Date(Filter_Data.unsanitary_cond.er_date) >
                new Date(violation_date)
              ) {
                Filter_Data.unsanitary_cond.er_date = violation_date;
              }

              if (
                new Date(Filter_Data.unsanitary_cond.ls_date) <
                new Date(violation_date)
              ) {
                Filter_Data.unsanitary_cond.ls_date = violation_date;
              }
            }
            break;

          case "vegetation":
            Filter_Data.vege_tation.vg_array.push(element);
            if (
              Filter_Data.vege_tation.er_date == "" &&
              Filter_Data.vege_tation.ls_date == ""
            ) {
              Filter_Data.vege_tation.er_date = violation_date;
              Filter_Data.vege_tation.ls_date = violation_date;
            } else {
              if (
                new Date(Filter_Data.vege_tation.er_date) >
                new Date(violation_date)
              ) {
                Filter_Data.vege_tation.er_date = violation_date;
              }

              if (
                new Date(Filter_Data.vege_tation.ls_date) <
                new Date(violation_date)
              ) {
                Filter_Data.vege_tation.ls_date = violation_date;
              }
            }
            break;

          case "chemical hazards":
            Filter_Data.chemical_hazards.ch_array.push(element);
            if (
              Filter_Data.chemical_hazards.er_date == "" &&
              Filter_Data.chemical_hazards.ls_date == ""
            ) {
              Filter_Data.chemical_hazards.er_date = violation_date;
              Filter_Data.chemical_hazards.ls_date = violation_date;
            } else {
              if (
                new Date(Filter_Data.chemical_hazards.er_date) >
                new Date(violation_date)
              ) {
                Filter_Data.chemical_hazards.er_date = violation_date;
              }

              if (
                new Date(Filter_Data.chemical_hazards.ls_date) <
                new Date(violation_date)
              ) {
                Filter_Data.chemical_hazards.ls_date = violation_date;
              }
            }
            break;

          case "retail food":
            Filter_Data.retail_food.rf_array.push(element);
            if (
              Filter_Data.retail_food.er_date == "" &&
              Filter_Data.retail_food.ls_date == ""
            ) {
              Filter_Data.retail_food.er_date = violation_date;
              Filter_Data.retail_food.ls_date = violation_date;
            } else {
              if (
                new Date(Filter_Data.retail_food.er_date) >
                new Date(violation_date)
              ) {
                Filter_Data.retail_food.er_date = violation_date;
              }

              if (
                new Date(Filter_Data.retail_food.ls_date) <
                new Date(violation_date)
              ) {
                Filter_Data.retail_food.ls_date = violation_date;
              }
            }

            break;

          case "biohazards":
            Filter_Data.bio_hazards.bh_array.push(element);
            if (
              Filter_Data.bio_hazards.er_date == "" &&
              Filter_Data.bio_hazards.ls_date == ""
            ) {
              Filter_Data.bio_hazards.er_date = violation_date;
              Filter_Data.bio_hazards.ls_date = violation_date;
            } else {
              if (
                new Date(Filter_Data.bio_hazards.er_date) >
                new Date(violation_date)
              ) {
                Filter_Data.bio_hazards.er_date = violation_date;
              }

              if (
                new Date(Filter_Data.bio_hazards.ls_date) <
                new Date(violation_date)
              ) {
                Filter_Data.bio_hazards.ls_date = violation_date;
              }
            }
            break;

          case "air pollutants and odors":
            Filter_Data.air_odors.ao_array.push(element);
            if (
              Filter_Data.air_odors.er_date == "" &&
              Filter_Data.air_odors.ls_date == ""
            ) {
              Filter_Data.air_odors.er_date = violation_date;
              Filter_Data.air_odors.ls_date = violation_date;
            } else {
              if (
                new Date(Filter_Data.air_odors.er_date) >
                new Date(violation_date)
              ) {
                Filter_Data.air_odors.er_date = violation_date;
              }

              if (
                new Date(Filter_Data.air_odors.ls_date) <
                new Date(violation_date)
              ) {
                Filter_Data.air_odors.ls_date = violation_date;
              }
            }
            break;

          default:
            break;
        }
      }
    },
    err: function(error) {
      console.log(error);
    }
  });
});

/* All addEvent Listener */

//Building Conditions alert

document.getElementById("getBC").addEventListener("click", function() {
  if (Filter_Data.building_conditions.bc_array == 0) {
    alert("Data not Found!");
  } else {
    alert(
      "Total Number of Violations: " +
        Filter_Data.building_conditions.bc_array.length +
        "\nEarliest Date: " +
        Filter_Data.building_conditions.er_date +
        "\nLatest Date: " +
        Filter_Data.building_conditions.ls_date
    );
  }
});

//Animal & Pest alert

document.getElementById("getAP").addEventListener("click", function() {
  if (Filter_Data.animal_pest.ap_array == 0) {
    alert("Data not Found!");
  } else {
    alert(
      "Total Number of Violations: " +
        Filter_Data.animal_pest.ap_array.length +
        "\nEarliest Date: " +
        Filter_Data.animal_pest.er_date +
        "\nLatest Date: " +
        Filter_Data.animal_pest.ls_date
    );
  }
});

//Garbage & Refuse
document.getElementById("getGR").addEventListener("click", function() {
  if (Filter_Data.garbage_refuse.gr_array == 0) {
    alert("Data not Found!");
  } else {
    alert(
      "Total Number of Violations: " +
        Filter_Data.garbage_refuse.gr_array.length +
        "\nEarliest Date: " +
        Filter_Data.garbage_refuse.er_date +
        "\nLatest Date: " +
        Filter_Data.garbage_refuse.ls_date
    );
  }
});

//Unsanitary Conditions

document.getElementById("getUC").addEventListener("click", function() {
  if (Filter_Data.unsanitary_cond.uc_array == 0) {
    alert("Data not Found!");
  } else {
    alert(
      "Total Number of Violations: " +
        Filter_Data.unsanitary_cond.uc_array.length +
        "\nEarliest Date: " +
        Filter_Data.unsanitary_cond.er_date +
        "\nLatest Date: " +
        Filter_Data.unsanitary_cond.ls_date
    );
  }
});

//Vegetation

document.getElementById("getVG").addEventListener("click", function() {
  if (Filter_Data.vege_tation.vg_array == 0) {
    alert("Data not Found!");
  } else {
    alert(
      "Total Number of Violations: " +
        Filter_Data.vege_tation.vg_array.length +
        "\nEarliest Date: " +
        Filter_Data.vege_tation.er_date +
        "\nLatest Date: " +
        Filter_Data.vege_tation.ls_date
    );
  }
});

//Chemical Hazards
document.getElementById("getCH").addEventListener("click", function() {
  if (Filter_Data.chemical_hazards.ch_array == 0) {
    alert("Data not Found!");
  } else {
    alert(
      "Total Number of Violations: " +
        Filter_Data.chemical_hazards.ch_array.length +
        "\nEarliest Date: " +
        Filter_Data.chemical_hazards.er_date +
        "\nLatest Date: " +
        Filter_Data.chemical_hazards.ls_date
    );
  }
});

//Biohazards
document.getElementById("getBI").addEventListener("click", function() {
  if (Filter_Data.bio_hazards.bh_array == 0) {
    alert("Data not Found!");
  } else {
    alert(
      "Total Number of Violations: " +
        Filter_Data.bio_hazards.bh_array.length +
        "\nEarliest Date: " +
        Filter_Data.bio_hazards.er_date +
        "\nLatest Date: " +
        Filter_Data.bio_hazards.ls_date
    );
  }
});

//Retail Food
document.getElementById("getRF").addEventListener("click", function() {
  if (Filter_Data.retail_food.rf_array == 0) {
    alert("Data not Found!");
  } else {
    alert(
      "Total Number of Violations: " +
        Filter_Data.retail_food.rf_array.length +
        "\nEarliest Date: " +
        Filter_Data.retail_food.er_date +
        "\nLatest Date: " +
        Filter_Data.retail_food.ls_date
    );
  }
});

//Air Pollutants and Odors
document.getElementById("getAPO").addEventListener("click", function() {
  if (Filter_Data.air_odors.ao_array == 0) {
    alert("Data not Found!");
  } else {
    alert(
      "Total Number of Violations: " +
        Filter_Data.air_odors.ao_array.length +
        "\nEarliest Date: " +
        Filter_Data.air_odors.er_date +
        "\nLatest Date: " +
        Filter_Data.air_odors.ls_date
    );
  }
});
