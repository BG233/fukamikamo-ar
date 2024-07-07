function screenshot()
{
    // 无camara背景，只有模型
    // document.querySelector("a-scene").components.screenshot.capture("perspective")

    //tst
    var ascene_data = document.querySelector("a-scene").components.screenshot.getCanvas("perspective").toDataURL('image/png')
    downloadImage(ascene_data, "screenshot1111.png")

    // var scene = document.querySelector('a-scene')
    // var canvasData = scene.renderer.domElement.toDataURL('image/png')
    // console.log(canvasData)

    // downloadImage(canvasData, "screenshot.png")
    // navigator.share({
    //     title: "screenshot",
    //     text: "screenshot",
    //     file: canvasData
    // }).then(() => console.log('Successful share'))

}

function downloadImage(data, filename) {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}