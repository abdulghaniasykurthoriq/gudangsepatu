import React from 'react'

function Header({fix}) {

    // const [fix, setFix] = useState(false)
  return (
    <div className=" w-100 bg-success text-light" style={{height: "70px", backgroundColor: "#732ff9", position: fix? "fixed":"relative"  }}>
                <h2 className="text-center">Aplikasi Gudang Sepatu</h2>
    </div>
  )
}

export default Header