import bgimg from "../../images/bg.png";
import bgimgTrain from "../../images/bg-train.png";

function Background() {
  return (
    <div className='background' style={{backgroundImage: `url(${bgimg})`}}>
        <div className='background-train'>
          <img src={bgimgTrain} alt=""/>
        </div>
      </div>
  );
}

export default Background;