

    Polymer('core-doc-toc', {

      searchAction: function() {
        this.$.searchBar.style.opacity = 1;
        this.$.searchBar.style.display = '';
      },

      closeSearchAction: function() {
        this.$.searchBar.style.opacity = 0;
        this.$.searchBar.style.display = 'none';
      }

    });

  