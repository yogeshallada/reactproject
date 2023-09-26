import React from "react"

function Medias(){
    return(
        <div>
            <br />
            <div>
            <h2 className="heading2">Thor Entry in Wakanda</h2><br /></div>
            <video controls height="450" width="800">
		<source src="video1.mp4" type="video/mp4" />
	        </video><br /><br />
            <div><h2 className="heading2">Iron Man Nano Suit up</h2><br /></div>
            <video controls height="450" width="800">
		<source src="video2.mp4" type="video/mp4" />
	        </video><br /><br />
            <div><h2 className="heading2">Wanda Maximoff against Thanos</h2><br /></div>
            <video controls height="450" width="800">
		<source src="video3.mp4" type="video/mp4" />
	        </video><br /><br />
            <div><h2 className="heading2">Hulk Vs HulkBuster</h2><br /></div>
            <video controls height="450" width="800">
		<source src="video4.mp4" type="video/mp4" />
	        </video><br /><br />
            <div><h2 className="heading2">Dr Strange Vs Thanos</h2><br /></div>
            <video controls height="450" width="800">
		<source src="video5.mp4" type="video/mp4" />
	        </video><br /><br />
        </div>
    )
}
export default Medias