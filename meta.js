/**
 * Meta JS File that will be picked up by the Vue CLI
 */
module.exports = {
  /**
   * Add your own Prompt questions here!
   */
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Nome do Projeto'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Descrição do Projeto',
      default: 'My Awesome Project'
    },
    private: {
      type: 'boolean',
      required: false,
      message: 'O repositôrio é privado',
      default: false
    },
    author: {
      type: 'string',
      message: 'Author'
    }
  },
  completeMessage: 'Bom código!'
};
