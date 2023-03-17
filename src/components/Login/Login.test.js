import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Login from "./Login";

describe('Login Component', () => { 
  let wrapper = null;
  
  const component = (path) => {
    return mount(
      <MemoryRouter initialEntries={[`${path}`]}>
        <Login />
      </MemoryRouter>
    )
  };
  beforeEach(()=>{
    wrapper = component();
  })
  it("is Rendered",()=>{
    const header = wrapper.find({"data-testid": "Login"});
    expect(header.length).toBe(1);
  })
  it("displays the greetings",()=>{
    const h1 = wrapper.find({"data-testid": "login_h1"});
    expect(h1.length).toBe(1);
    expect(h1.text()).toBe("Welcome back");
  })
 })

