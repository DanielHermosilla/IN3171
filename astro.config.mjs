// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
	site: 'https://danielhermosilla.github.io',
	base: '/IN3171',
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	},
	integrations: [
		starlight({
			title: 'IN3171 — Modelamiento y Optimización',
			customCss: ['./src/styles/katex.css', './src/styles/theme.css'],
			sidebar: [
				{
					label: 'Ruta del Curso',
					autogenerate: { directory: '00-ruta-del-curso' },
				},
				{
					label: 'Fundamentos y Redes',
					autogenerate: { directory: '01-fundamentos-y-modelacion-en-redes' },
				},
				{
					label: 'Modelación Entera',
					autogenerate: { directory: '02-modelacion-con-problemas-lineales-enteros' },
				},
				{
					label: 'Geometría y Simplex',
					autogenerate: { directory: '03-geometria-de-poliedros-y-metodo-simplex' },
				},
				{
					label: 'Dualidad y Sensibilidad',
					autogenerate: { directory: '04-dualidad-y-sensibilidad-de-soluciones-optimas' },
				},
				{
					label: 'Optimización No Lineal',
					autogenerate: { directory: '05-elementos-de-optimizacion-no-lineal' },
				},
				{
					label: 'Taller y Práctica',
					autogenerate: { directory: '06-taller-y-practica' },
				},
			],
		}),
	],
});
