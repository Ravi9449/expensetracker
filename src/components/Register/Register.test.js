import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Registration from "./Register";

describe('Register Component', () => { 
  let wrapper = null;
  
  const component = (path) => {
    return mount(
      <MemoryRouter initialEntries={[`${path}`]}>
        <Registration />
      </MemoryRouter>
    )
  };
  beforeEach(()=>{
    wrapper = component();
  })
  it("is Rendered",()=>{
    const register = wrapper.find({"data-testid": "Register"});
    expect(register.length).toBe(1);
  })
 })

