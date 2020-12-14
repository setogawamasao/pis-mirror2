import * as THREE from "three";

export const setAppTitleText = (
  scene: THREE.Scene,
  objects: Array<THREE.Object3D>
) => {
  const loader = new THREE.FontLoader();
  loader.load("./build/fonts/helvetiker_regular.typeface.json", (font) => {
    const space = 5;
    // cross
    const messageCross = "X";
    const geometryCross = new THREE.TextBufferGeometry(messageCross, {
      font: font,
      size: 20,
      height: 5,
    });
    geometryCross.computeBoundingBox();
    const xCross =
      geometryCross.boundingBox.max.x - geometryCross.boundingBox.min.x;
    const yCross =
      geometryCross.boundingBox.max.y - geometryCross.boundingBox.min.y;
    geometryCross.translate(-xCross / 2, -yCross / 2, 0);
    const matLiteCross = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });
    const textCross = new THREE.Mesh(geometryCross, matLiteCross);
    scene.add(textCross);
    objects.push(textCross);

    // lower message collabo 1
    const messageCollabo1 = "MIRROR MIRROR";
    const geometryCollabo1 = new THREE.TextBufferGeometry(messageCollabo1, {
      font: font,
      size: 30,
      height: 5,
    });
    geometryCollabo1.computeBoundingBox();
    const xCollabo1 =
      geometryCollabo1.boundingBox.max.x - geometryCollabo1.boundingBox.min.x;
    const yCollabo1 =
      geometryCollabo1.boundingBox.max.y - geometryCollabo1.boundingBox.min.y;

    geometryCollabo1.translate(-xCollabo1 / 2, yCross / 2 + space, 0);
    const matLiteCollabo1 = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });
    const textCollabo1 = new THREE.Mesh(geometryCollabo1, matLiteCollabo1);
    scene.add(textCollabo1);
    objects.push(textCollabo1);

    // upper message Collabo 2
    const messageCollabo2 = "TOKYO ANOTHER GIRL";
    const shapesCollabo2 = font.generateShapes(messageCollabo2, 15);
    const geometryCollabo2 = new THREE.TextBufferGeometry(messageCollabo2, {
      font: font,
      size: 15,
      height: 5,
    });
    geometryCollabo2.computeBoundingBox();
    const xCollabo2 =
      geometryCollabo2.boundingBox.max.x - geometryCollabo2.boundingBox.min.x;
    const yCollabo2 =
      geometryCollabo2.boundingBox.max.y - geometryCollabo2.boundingBox.min.y;

    geometryCollabo2.translate(
      -xCollabo2 / 2,
      yCross / 2 + space + yCollabo1 + space,
      0
    );
    const matLiteCollabo2 = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });
    const textCollabo2 = new THREE.Mesh(geometryCollabo2, matLiteCollabo2);
    scene.add(textCollabo2);
    objects.push(textCollabo2);

    // upper message1
    const message1 = "PIs";
    const geometry1 = new THREE.TextBufferGeometry(message1, {
      font: font,
      size: 50,
      height: 5,
    });
    geometry1.computeBoundingBox();
    const x1 = geometry1.boundingBox.max.x - geometry1.boundingBox.min.x;
    const y1 = geometry1.boundingBox.max.y - geometry1.boundingBox.min.y;

    geometry1.translate(-x1 / 2, -(yCross / 2 + space + y1), 0);
    const matLite1 = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });
    const text1 = new THREE.Mesh(geometry1, matLite1);
    scene.add(text1);
    objects.push(text1);

    // lower message1
    const message2 = "SNS that shares space";
    const shapes2 = font.generateShapes(message2, 15);
    const geometry2 = new THREE.TextBufferGeometry(message2, {
      font: font,
      size: 15,
      height: 5,
    });
    geometry2.computeBoundingBox();
    const x2 = geometry2.boundingBox.max.x - geometry2.boundingBox.min.x;
    const y2 = geometry2.boundingBox.max.y - geometry2.boundingBox.min.y;

    geometry2.translate(-x2 / 2, -(yCross / 2 + space + y1 + space + y2), 0);
    const matLite2 = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });
    const text2 = new THREE.Mesh(geometry2, matLite2);

    scene.add(text2);
    objects.push(text2);
  });
};
