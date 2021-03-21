import mp3 from '../song.mp4'
const Music = () => {
    const playAudio = () => {
        var x = document.getElementById("myAudio");
        x.play();
    }
    const pauseAudio = () => {
        var x = document.getElementById("myAudio");
        x.pause();
    }
    const restartAudio = () => {
        var x = document.getElementById("myAudio");
        x.currentTime = 0
    }
    return (
        <div className="music">
            <audio id="myAudio">
                <source src={mp3} type="audio/ogg"></source>
            </audio>
            <button onClick={playAudio} type="button"><i className="fas fa-play"></i></button>
            <button onClick={pauseAudio} type="button"><i className="fas fa-pause"></i></button>
            <button onClick={restartAudio} type="button"><i className="fas fa-stop"></i></button>
        </div>
    )
}
export default Music;