import PricingTable from './PricingTable.js';
import SideMenuMobile from '../sideMenu/SideMenuMobile';

function Pricing() {
  return (
    <article className="flex flex-col col-span-2 items-center">
      <SideMenuMobile/>
      <PricingTable />
    </article>
  );
}

export default Pricing;
