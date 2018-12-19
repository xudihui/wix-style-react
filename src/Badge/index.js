/* eslint-disable no-duplicate-imports */
import { Badge as BadgeComponent } from './Badge';
import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

export * from './constants';

export default withFocusable(BadgeComponent);
