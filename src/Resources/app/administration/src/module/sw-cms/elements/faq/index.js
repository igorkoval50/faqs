import './component';
import './config';
import './preview';

Shopware.Service('cmsService').registerCmsElement({
	name: 'faq',
	label: 'FAQ',
	component: 'sw-cms-el-faq',
	configComponent: 'sw-cms-el-config-faq',
	previewComponent: 'sw-cms-el-preview-faq',

	defaultConfig: {
		c108faqhighlightcolor: {
			source: 'static',
			value: '#015E06'
		},
		c108faqbannerimg: {
			source: 'static',
			value: 'c108-faq-bg-1'
		},
		c108faqbannerownimagepath: {
			source: 'static',
			value: ''
		},
		c108faqbannertype: {
			source: 'static',
			value: 'shippedimage'
		},
		c108faqbannertitle: {
			source: 'static',
			value: 'Unsere Antworten auf deine Fragen'
		},
		media: {
			source: 'static',
			value: null,
			entity: {
				name: 'media'
			}
		},
		c108faqsection1text: {
			source: 'static',
			value: 'mehr erfahren'
		},
		c108faqsection1title: {
			source: 'static',
			value: 'Titel'
		},
		c108faqsection1questionsArray: {
			source: 'static',
			value: [
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' }
			]
		},
		c108faqsection2questionsArray: {
			source: 'static',
			value: [
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' }
			]
		},
		c108faqsection3questionsArray: {
			source: 'static',
			value: [
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' }
			]
		},
		c108faqsection4questionsArray: {
			source: 'static',
			value: [
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' }
			]
		},
		c108faqsection5questionsArray: {
			source: 'static',
			value: [
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' }
			]
		},
		c108faqsection6questionsArray: {
			source: 'static',
			value: [
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' }
			]
		},
		c108faqsection7questionsArray: {
			source: 'static',
			value: [
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' }
			]
		},
		c108faqsection8questionsArray: {
			source: 'static',
			value: [
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: 'Lorem ipsum dolor?', answer:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' },
				{ question: '', answer:'' }
			]
		},
		c108faqsection1icontype: {
			source: 'static',
			value: 'shippedicon'
		},
		c108faqsection1icon: {
			source: 'static',
			value: 'help'
		},
		c108faqsection1iconpath: {
			source: 'static',
			value: ''
		},
		c108faqsection2text: {
			source: 'static',
			value: 'mehr erfahren'
		},
		c108faqsection2title: {
			source: 'static',
			value: 'Titel'
		},
		c108faqsection2icontype: {
			source: 'static',
			value: 'shippedicon'
		},
		c108faqsection2icon: {
			source: 'static',
			value: 'help'
		},
		c108faqsection2iconpath: {
			source: 'static',
			value: ''
		},
		c108faqsection3text: {
			source: 'static',
			value: 'mehr erfahren'
		},
		c108faqsection4text: {
			source: 'static',
			value: 'mehr erfahren'
		},
		c108faqsection5text: {
			source: 'static',
			value: 'mehr erfahren'
		},
		c108faqsection6text: {
			source: 'static',
			value: 'mehr erfahren'
		},
		c108faqsection7text: {
			source: 'static',
			value: 'mehr erfahren'
		},
		c108faqsection8text: {
			source: 'static',
			value: 'mehr erfahren'
		},
		c108faqsection3title: {
			source: 'static',
			value: 'Titel'
		},
		c108faqsection3icontype: {
			source: 'static',
			value: 'shippedicon'
		},
		c108faqsection3icon: {
			source: 'static',
			value: 'help'
		},
		c108faqsection3iconpath: {
			source: 'static',
			value: ''
		},
		c108faqsection4title: {
			source: 'static',
			value: 'Titel'
		},
		c108faqsection4icontype: {
			source: 'static',
			value: 'shippedicon'
		},
		c108faqsection4icon: {
			source: 'static',
			value: 'help'
		},
		c108faqsection4iconpath: {
			source: 'static',
			value: ''
		},
		c108faqsection5title: {
			source: 'static',
			value: 'Titel'
		},
		c108faqsection5icontype: {
			source: 'static',
			value: 'shippedicon'
		},
		c108faqsection5icon: {
			source: 'static',
			value: 'help'
		},
		c108faqsection5iconpath: {
			source: 'static',
			value: ''
		},
		c108faqsection6title: {
			source: 'static',
			value: 'Titel'
		},
		c108faqsection6icontype: {
			source: 'static',
			value: 'shippedicon'
		},
		c108faqsection6icon: {
			source: 'static',
			value: 'help'
		},
		c108faqsection6iconpath: {
			source: 'static',
			value: ''
		},
		c108faqsection7title: {
			source: 'static',
			value: 'Titel'
		},
		c108faqsection7icontype: {
			source: 'static',
			value: 'shippedicon'
		},
		c108faqsection7icon: {
			source: 'static',
			value: 'help'
		},
		c108faqsection7iconpath: {
			source: 'static',
			value: ''
		},
		c108faqsection8title: {
			source: 'static',
			value: 'Titel'
		},
		c108faqsection8icontype: {
			source: 'static',
			value: 'shippedicon'
		},
		c108faqsection8icon: {
			source: 'static',
			value: 'help'
		},
		c108faqsection8iconpath: {
			source: 'static',
			value: ''
		},
	}
});
