import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss';

export default defineConfig({
  // ...UnoCSS options
  // safelist: ['bg-[var(--inverted-color)]', 'bg-[var(--base-color)]', 'h-75%', 'h-100%', 'bottom-0', 'op-40'],
  // 预设
  presets: [
    presetUno(), // 默认预设 | @unocss/preset-wind
    presetAttributify(), // class拆分属性预设 | @unocss/preset-attributify为其他规则启用属性化模式
    presetTypography(), // 排版预设 | @unocss/preset-typography
    presetIcons({ // 图标库预设 | @unocss/preset-icons
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({ // 网络字体预设 | @unocss/preset-web-fonts
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  // 转换器
  transformers: [
    transformerDirectives(), // @unocss/transformer-variant-group
    transformerVariantGroup() // @unocss/transformer-directives
  ]
});
