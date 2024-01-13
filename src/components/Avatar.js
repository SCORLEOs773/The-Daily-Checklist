import React, { useState } from 'react'

export default function Avatar() {

    let [pp, setpp] = useState({
        borderRadius: '50px',
        height: '50px',
        // backgroundColor: "green"
    });

    function big() {
        setpp({
            borderRadius: '50px',
            height: '100px'
        })
    }

    function small() {
        setpp({
            borderRadius: '50px',
            height: '50px'
        })
    }

    function getInitial() {
        let name = "Sukhad Sharma";
        name = name.split(" ");
        let firstLetter = name[0].charAt(0);
        let lastLetter = name.length > 1 ? name[name.length - 1].charAt(0) : " ";
        return firstLetter + lastLetter;
    }
    console.log(getInitial());

    // let name = getInitial(name);

    return (
        <div className="d-flex text-center">
            <div className='container m-4'>
                <img style={pp} onMouseOver={big} onMouseOut={small} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAB5CAMAAACjkCtXAAAAkFBMVEX/mTMSiAf/////kxz/4csAfwDG2sMAAIEAAHwAAHjz8/rFxd719foAAIX4+PvT0+ehocq5udfp6fOVlb7g4O+lpcuOjsF1dbJAQJsREYmTk8BgYKfj4+5lZaaJicCurs8fH4lMTKAuLo+AgLc4OJNUVKIpKZBxcbNBQZd4eLBKSpiDg7SLi7hoaJtmZp4jI5IVv2T9AAACWklEQVR4nO2YW4+bMBBG6Wxbgw0Ygx0ugXgTwua++///XSftqupL3wZrLc1RJAgPmaPRJ2eYJGEYhmEYhmEYhmEYhmEYhmEYhmEYJh5eoiT5HiUJRAlrh2Qtbes2bbtxdqWfX0VbzWmWiiwTeJnVGhVW0NaTEKLb90r1+w5vJ01fg1y7HLL03OsSJAKl7s9pNpTUVci1t6LY1CNgNCwGW8FYbwqxpa5CrF0u6XHKbQmjBo2fEUqbT4d0Ie43sXYrzjqHGnu9e2rvsN815PosWto6tNo+zYzEbFQ17HKl8h3UFaZF+iz1pIVIteu3YhpBY69bqLQxusIbUBrGqXirKSuRat/Si8SL8eCcboxptHfgDT6Sl/RGWYlSO3/FKBjMiKvk1e6N2durrJ4pMRif15ywFKW2FwdMsBoUNI27TM5NF9c0oPEB+IOgTDel9k04wINODic7N/NcVTNe7GmDqS7BCcqUEGrLa69HZbwFvb8Pg29bPwz3RYP1Ro+6XyRdLULtuhcNytth21bu5I5FcXSnqmq3G4v9bkRPeJYQao/i+DmnqvugugLp1HD7nADtUYx0tUi1F6nN7vT+eLxPp4+n9kc74bfHNHstly+rHWW3I822XKI8SSI9t2P9l/w7k1RRzST/mQCfXf7KE2Cs83akbzexvkvG+uYe6Z7kz1aq+3cr1UWxlYp0B/gkyo3rb2Lcb68Pa4ck+RklyY8oSb5FCWuHhLVDwtohYe2QsHZIWDskrB0S1g4Ja4eEtUPC2iFh7ZCwdkhYOySsHRLWDglrh4S1Q8LaIfkFD8WVw0uUYG4AAAAASUVORK5CYII=" alt="" />
                <div className="h2" >{getInitial()}</div>
            </div>
        </div>
    )
}
