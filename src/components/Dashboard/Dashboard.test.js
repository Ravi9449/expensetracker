import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "./Dashboard";

describe('Dashboard Component', () => { 
  let wrapper = null;
  
  const component = (path) => {
    return mount(
      <MemoryRouter initialEntries={[`${path}`]}>
        <Dashboard />
      </MemoryRouter>
    )
  };
  beforeEach(()=>{
    wrapper = component();
  })
  it("is Rendered",()=>{
    const dash = wrapper.find({"data-testid": "Dashboard"});
    expect(dash.length).toBe(1);
  })
 })

