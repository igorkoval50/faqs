import { Component, Mixin } from 'src/core/shopware';
import template from './sw-cms-el-config-faq.html.twig';
import './sw-cms-el-config-faq.scss';

Component.register('sw-cms-el-config-faq', {
  template,

  mixins: [
    Mixin.getByName('cms-element')
  ],

  inject: ['repositoryFactory'],

  data() {
    return {
      mediaModalIsOpen: false,
      initialFolderId: null
    };
  },

  computed: {

    mediaUrl() {
      const context = Shopware.Context.api;
      const elemData = this.element.data.media;
      const mediaSource = this.element.config.media.source;

      this.element.config.c108ipbgownimgpath.value

      if (elemData && elemData.id) {
        return this.element.data.media.url;
      }

      if (elemData && elemData.url) {
        return `${context.assetsPath}${elemData.url}`;
      }
    },

    mediaRepository() {
      return this.repositoryFactory.create('media');
    },

    uploadTag() {
      return `cms-element-media-config-${this.element.id}`;
    },

    previewSource() {
      if (this.element.data && this.element.data.media && this.element.data.media.id) {
        return this.element.data.media;
      }

      return this.element.config.media.value;
    },

    passStylesFirst() {
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
      this.initElementConfig('faq');
    },

    async onImageUpload({ targetId }) {
      const mediaEntity = await this.mediaRepository.get(targetId, Shopware.Context.api);

      this.element.config.media.value = mediaEntity.id;
      this.element.config.c108faqbannerownimagepath.value = mediaEntity.url;

      this.updateElementData(mediaEntity);

      this.$emit('element-update', this.element);
    },

    onImageRemove() {
      this.element.config.media.value = null;
      this.element.config.c108faqbannerownimagepath.value = '';

      this.updateElementData();

      this.$emit('element-update', this.element);
    },

    onCloseModal() {
      this.mediaModalIsOpen = false;
    },

    onSelectionChanges(mediaEntity) {
      const media = mediaEntity[0];
      this.element.config.media.value = media.id;

      this.updateElementData(media);
      this.element.config.c108faqbannerownimagepath.value = media.url;

      this.$emit('element-update', this.element);
    },

    updateElementData(media = null) {
      this.$set(this.element.data, 'mediaId', media === null ? null : media.id);
      this.$set(this.element.data, 'media', media);
    },

    onOpenMediaModal() {
      this.mediaModalIsOpen = true;
    }
  }
});
