import loading from './loading.png';
import './Loading.css';

export default function Loading() {
  return (
    <div className="loadingDiv">
      <div className="container">
        <img src={loading} className="loading" alt="loading" />
      </div>
      <div className="container wavy">
        <span id="one">L</span>
        <span id="two">o</span>
        <span id="three">a</span>
        <span id="four">d</span>
        <span id="five">i</span>
        <span id="six">n</span>
        <span id="seven">g</span>
        <span id="eight">.</span>
        <span id="nine">.</span>
        <span id="ten">.</span>
      </div>
    </div>
  );
}