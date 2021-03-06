import { BsPrefixComponent } from './helpers';

export interface ModalDialogProps {
  size?: 'sm' | 'lg' | 'xl';
  centered?: boolean;
  scrollable?: boolean;
}

declare class ModalDialog extends BsPrefixComponent<'div', ModalDialogProps> {}

export default ModalDialog;
