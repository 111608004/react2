import Dashboard from '../Components/dashboard/Dashboard';
// please add your test cases here

import Login from '../Components/login/Login'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
let container=null
beforeEach(()=>{
    container=document.createElement("div");
    document.body.appendChild(container);

});
afterEach(()=>
{
    unmountComponentAtNode(container);
    container.remove();
    container=null;
})
it("render Dashboard",()=>{
    act(()=>{
        render(<Login></Login>,container)
    })
    //expect(container.textContent[0]).toBe("L");
    const button = container.querySelector('button');
    expect(button.innerHTML).toBe('Submit')
}
)
export default Dashboard;