import { useState } from "react";

export default function SeperatedPage() {

    const[data,setText] = useState("")

    return(
        <div>
            <div className="seperated-container">
                <div className="left-container">
                </div>

                <div className="right-container">
                </div>
            </div>
        </div>
    );
}