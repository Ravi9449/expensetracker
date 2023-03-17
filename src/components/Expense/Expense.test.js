import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import Expense from './Expense'

describe('Expense Component', () => { 
  let wrapper = null;
  
  const component = (path) => {
    return mount(
      <MemoryRouter initialEntries={[`${path}`]}>
        <Expense />
      </MemoryRouter>
    )
  };
  beforeEach(()=>{
    wrapper = component();
  })
  it("is Rendered",()=>{
    const register = wrapper.find({"data-testid": "Expense"});
    expect(register.length).toBe(1);
  })
 })

