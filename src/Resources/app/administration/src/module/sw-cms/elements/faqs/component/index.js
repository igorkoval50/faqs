import { Component, Mixin } from 'src/core/shopware';
import template from './sw-cms-el-faq.html.twig';
import './sw-cms-el-faq.scss';

Component.register('sw-cms-el-faqs', {
  template,

  mixins: [
    Mixin.getByName('cms-element')
  ],

  computed: {
    mediaUrl() {
      const context = Shopware.Context.api;
      const elemData = this.element.data.media;
      const mediaSource = this.element.config.media.source;

      if (elemData && elemData.id) {
        return this.element.data.media.url;
      }

      if (elemData && elemData.url) {
        return `${context.assetsPath}${elemData.url}`;
      }
    },

    getBackgroundImage(){
      const context = Shopware.Context.api;
      var currentBG = 'unset';
      var uploadedBgImgPath = '';

      switch(this.element.config.c108faqbannertype.value) {

        case 'shippedimage':
        uploadedBgImgPath = `${context.assetsPath}/c108faq/static/img/cms/${this.element.config.c108faqbannerimg.value}.jpg`;
        break;

        // case ownimage
        case 'ownimage':
        uploadedBgImgPath = `${this.element.config.c108faqbannerownimagepath.value}`;
        break;
      }

      currentBG = 'url('+ uploadedBgImgPath + ')';
      return currentBG;
    },

    getTitleImage(){
      // const context = Shopware.Context.api;
      // var currentTitleImg = 'unset';
      // var uploadedTitleImgPath = '';
      // uploadedTitleImgPath = `${context.assetsPath}/c108faq/static/img/cms/${}.png`;
      // currentTitleImg = 'url('+ uploadedTitleImgPath + ')';
      // return currentTitleImg;
      return this.element.config.c108faqbannertitle.value;
    },

    getPath1() {
      const path = this.element.config.c108faqsection1iconpath.value;
      return `${path}`;
    },

    getPath2() {
      const path = this.element.config.c108faqsection2iconpath.value;
      return `${path}`;
    },

    getPath3() {
      const path = this.element.config.c108faqsection3iconpath.value;
      return `${path}`;
    },

    getPath4() {
      const path = this.element.config.c108faqsection4iconpath.value;
      return `${path}`;
    },

    passIconCol() {
      return {
        '--c108faqiconcol': this.element.config.c108faqhighlightcolor.value
      }
    }
  },

  created() {
    this.createdComponent();
  },

  methods: {
    createdComponent() {
      this.initElementConfig('faqs');
      this.initElementData('faqs');
    }
  }
});
