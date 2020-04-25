import CButton from '@/components/Button';
import CIcon from '@/components/Icon';
import CCheckbox from '@/components/Checkbox';
import CRadio from '@/components/Radio';
import CModal from '@/components/Modal';
import CQuantityInput from '@/components/QuantityInput';
import CSearchSelect from '@/components/SearchSelect';
import CMultiSelect from '@/components/MultiSelect';
import CNativeSelect from '@/components/NativeSelect';
import CSelect from '@/components/Select';
import CTextarea from '@/components/Textarea';
import CTextInput from '@/components/TextInput';
import CMasonry from '@/components/Masonry';
import { CTable, CColumn } from '@/components/Table';
import { CTabSwitcher, CTabLabel, CTab } from '@/components/TabSwitcher';
import { CPanelSlider, CPanel, CPanelLink } from '@/components/PanelSlider';
import CAlert from '@/components/alert';


const components = [
  CButton,
  CIcon,
  CCheckbox,
  CRadio,
  CModal,
  CQuantityInput,
  CSearchSelect,
  CMultiSelect,
  CSelect,
  CNativeSelect,
  CTextarea,
  CTextInput,
  CTable,
  CColumn,
  CTabSwitcher,
  CTabLabel,
  CTab,
  CPanelSlider,
  CPanelLink,
  CPanel,
  CMasonry,
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$alert = CAlert; // eslint-disable-line
};

export default {
  install,
  CAlert,
  ...components,
};

export {
  CButton,
  CIcon,
  CCheckbox,
  CRadio,
  CModal,
  CQuantityInput,
  CSearchSelect,
  CMultiSelect,
  CSelect,
  CNativeSelect,
  CTextarea,
  CTextInput,
  CTable,
  CColumn,
  CTabSwitcher,
  CTabLabel,
  CTab,
  CPanelSlider,
  CPanelLink,
  CPanel,
  CMasonry,
  CAlert,
};
