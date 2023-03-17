import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import History from "./History";

describe('History Component', () => { 
  let wrapper = null;
  
  const component = (path) => {
    return mount(
      <MemoryRouter initialEntries={[`${path}`]}>
        <History />
      </MemoryRouter>
    )
  };
  beforeEach(()=>{
    wrapper = component();
  })
  it("is Rendered",()=>{
    const register = wrapper.find({"data-testid": "History"});
    expect(register.length).toBe(1);
  })
 })

