import "../css/style.css";
import $ from "jquery";
import { heroComponent } from "../../components/home/hero";

const heroContent = document.getElementById("hero-content");

$(document).ready(function () {
  $("#hero-content").html(heroComponent);
});
