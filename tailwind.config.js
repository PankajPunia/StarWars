module.exports = {
  purge: [],
  theme: {
    extend: {
      flex: {
        0.5: '0.5 0.5 0%',
        0.9: '0.9 0.9 0%',
        0.8: '0.8 0.8 0%',
        2: '2 2 0%',
      },
      borderRadius: {
        sm: '0.1875rem',
      },
      letterSpacing: {
        normal: '0.02rem',
        tighter: '.0125em',
      },
      boxShadow: {
        up: '0px -4px 4px rgba(0, 0, 0, 0.25)',
        'surround-sm': '0px 0px 4px rgba(0, 0, 0, 0.3)',
        md: '0px 0px 10px rgba(0, 0, 0, 0.4)',
      },
      borderColor: {
        separator: '#eaeaea',
      },
      borderWidth: {
        1: '1px',
      },
      zIndex: {
        40: 9000,
      },
      colors: {
        almond: {
          default: '#F4DFBA',
          dark: '#876445',
        },
        grey: {
          light: '#C8C6C6',
          default: '#8C8C8C',
        },
      },
      height: {
        inherit: 'inherit',
        6: '1.875rem',
        10: '2.6875rem',
        16: '4.6875rem',
      },
      spacing: {
        '16/9': '56.25%',
        '16/23': '69.565%',
        4.5: '1.125rem',
        13: '3.25rem',
      },
      width: {
        modal: '620px',
        6: '1.875rem',
        10: '2.6875rem',
        16: '4.6875rem',
      },
      backgroundOpacity: {
        backdrop: '0.55',
      },
      stroke: theme => ({
        focused: theme('colors.teal.default'),
      }),
      fontSize: {
        xs: ['0.6875rem', '0.875rem'], //11px
        sm: ['0.8125rem', '1rem'], //13px
        base: ['1.0625rem', '1.375rem'], //17px
        lg: ['1.125rem', '1.25rem'], //18px
        xl: ['1.25rem', '1.375rem'], //20px
        '2xl': ['1.375rem', '1.625rem'], //22px
        '3xl': ['1.625rem', '1.875rem'], //26px
        '4xl': ['1.75rem', '2.125rem'], //28px
        '5xl': ['2rem', '2.375rem'], //32px
        '6xl': ['2.5rem', '3.5rem'], //40px
        '7xl': ['3rem', '4.1875rem'], //48px
      },
      animation: {
        spin: 'spin 0.75s linear infinite',
      },
    },
  },
  variants: {
    padding: ['responsive', 'last'],
    borderWidth: ['responsive', 'last'],
  },
};
