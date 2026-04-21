import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Spinner from '../../../app/components/spinner.vue';

describe('Spinner component', () => {
    it('renders a div with class bwSpinner', () => {
        const wrapper = mount(Spinner);
        expect(wrapper.find('.bw-spinner').exists()).toBe(true);
    });
});
