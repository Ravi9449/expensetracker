import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe('Header Component', () => { 
  let wrapper = null;
  
  const component = (path) => {
    return mount(
      <MemoryRouter initialEntries={[`${path}`]}>
        <Header />
      </MemoryRouter>
    )
  };
  beforeEach(()=>{
    wrapper = component();
  })
  it("is Rendered",()=>{
    const header = wrapper.find({"data-testid": "Header"});
    expect(header.length).toBe(1);
  })
  // it("is displaying app name",()=>{
  //   const nav = wrapper.find({"data-testid": "HNavbar"});
  //   expect(nav.length).toBe(1);
  //   expect(nav.text()).toBe("EasyTracker");
  // })
 })
