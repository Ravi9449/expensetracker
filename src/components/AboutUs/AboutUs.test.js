import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import AboutUs from "./AboutUs";

describe('AboutUs Component', () => { 
  let wrapper = null;
  
  const component = (path) => {
    return mount(
      <MemoryRouter initialEntries={[`${path}`]}>
        <AboutUs />
      </MemoryRouter>
    )
  };
  beforeEach(()=>{
    wrapper = component();
  })
  it("is Rendered",()=>{
    const register = wrapper.find({"data-testid": "AboutUs"});
    expect(register.length).toBe(1);
  })
 })

