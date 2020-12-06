import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'faqs',
    label: 'sw-cms.blocks.textImage.faq.label',
    category: 'text-image',
    component: 'sw-cms-block-faqs',
    previewComponent: 'sw-cms-preview-faqs',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        c108faqcontent: {
            type: 'faqs',
            default: {
                config: {
                    displayMode: { source: 'static', value: 'cover' }
                }
            }
        }
    }
});
