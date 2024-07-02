import React from 'react'

const Menu = ({ setLineColor, setLineWidth, setLineOpacity, lineOpacity, lineWidth, clearCanvas, saveCanvas }) => {
    return (
        <div className='bg-white p-3 d-flex flex-column gap-3 align-items-center rounded-5'>

            {/* Save and Clear Canvas Buttons */}
            <div>
                <button className='btn btn-primary me-2' onClick={saveCanvas}>Save</button>
                <button className='btn btn-secondary' onClick={clearCanvas}>Clear</button>
            </div>


            {/* Line Color */}
            <input type="color" className='form-control form-control-color' onChange={(e) => {
                setLineColor(e.target.value);
            }} />


            {/* Brush Width and Opacity */}
            <div>
                {/* Brush Width */}
                <div className='d-flex align-items-center gap-1'>
                    <i className="bi bi-brush-fill"></i>
                    <input type="range" min="3" max="20" className='form-range' value={lineWidth} onChange={(e) => {
                        setLineWidth(e.target.value);
                    }} />
                </div>

                {/* Brush Opacity */}
                <div className='d-flex align-items-center gap-1'>
                    <i className="bi bi-circle-half"></i>
                    <input type="range" min="0" max="100" className='form-range' value={lineOpacity * 100} onChange={(e) => {
                        setLineOpacity(e.target.value / 100);
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Menu