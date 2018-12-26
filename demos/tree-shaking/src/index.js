import { requiresFormData } from "@esri/arcgis-rest-request";

let element = document.createElement('div');
document.body.appendChild(element);

const options = {
  params: {
    baz: "bar"
  }
}

element.innerHTML = requiresFormData(options); // false
