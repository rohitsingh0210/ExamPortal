console.log("attatched")
const video = document.getElementById('video')

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('./static/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('./static/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('./static/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('./static/models')
]).then(startVideo)

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  // document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    // console.log("detections "+Objects.keys(detections))
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    console.log(resizedDetections.length)
    if(resizedDetections.length>1){
      console.log("too many people")
    }
    else if(resizedDetections.length==0) console.log("no one")
    // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    // faceapi.draw.drawDetections(canvas, resizedDetections)
    //  faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
  }, 1000)
})
