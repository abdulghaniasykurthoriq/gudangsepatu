import React from 'react'

function UploadImage({img, ...rest}) {
  return (
    <div>
        {img && <img src={img} alt="preview" style={{width:'200px'}}/>}
        <input type="file" {...rest}/>
    </div>
  )
}

export default UploadImage