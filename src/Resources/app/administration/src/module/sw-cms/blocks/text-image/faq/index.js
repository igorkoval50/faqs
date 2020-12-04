import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'faq',
    label: 'sw-cms.blocks.textImage.faq.label',
    category: 'text-image',
    component: 'sw-cms-block-faq',
    previewComponent: 'sw-cms-preview-faq',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        c108faqcontent: {
            type: 'faq',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                }
            }
        }
    }
});
