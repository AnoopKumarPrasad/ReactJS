import React from 'react'
function NameList() {
    const names=['manu','suma','raj'];
    return(
        <div>
            {
                names.map(mn=><h2>{mn}</h2>)
            }
        </div>
    );
   
}
export default NameList;