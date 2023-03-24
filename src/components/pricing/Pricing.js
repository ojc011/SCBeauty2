import PricingTable from './PricingTable.js';
import SideMenuMobile from '../sideMenu/SideMenuMobile';

function Pricing() {
  return (
    <article className="flex flex-col min-h-screen col-span-2 items-center p-5">
      <SideMenuMobile/>
      <PricingTable />
    </article>
  );
}

export default Pricing;
