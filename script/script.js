function show_form() {
  $("#form-block").show();
}

$(function () {
  $("#slider-range-min").slider({
    range: "min",
    value: 0,
    min: 0,
    max: 10,
    step: 1,
  });
});
