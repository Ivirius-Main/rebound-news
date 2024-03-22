<script>
	import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
	import PostsList from '$lib/components/PostsList.svelte'
	import SocialLinks from '$lib/components/SocialLinks.svelte'
	import { avatar, bio, name } from '$lib/info.js'
	import * as Fluent from "fluent-svelte";
	import "fluent-svelte/theme.css";
	import { Button, Checkbox } from "fluent-svelte";

	/** @type {import('./$types').PageData} */
	export let data
</script>

<svelte:head>
  <title>Test</title>
  <meta name="description" content="Test" />
</svelte:head>

<body class="relative font-inter antialiased">

    <main class="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
        <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">

            <!-- Feature Comparison Pricing Table component -->
            <div class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-4 md:-mx-6 text-sm">

                <!-- Column with labels -->
                <section class="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl">
                    <!-- Pricing toggle -->
                    <div class="relative bg-white dark:bg-slate-900 px-6 flex flex-col justify-end">
                        <div class="pb-5 md:border-b border-slate-200 dark:border-slate-700">
                            <!-- Toggle switch -->
                            <div class="max-md:text-center">
                                <div class="inline-flex items-center whitespace-nowrap">
                                    <div class="text-sm text-slate-500 mr-2 md:max-lg:sr-only">Monthly</div>
                                    <div class="relative">
                                        <input type="checkbox" id="toggle" class="peer sr-only" x-model="isAnnual" />
                                        <label for="toggle" class="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-slate-400 px-0.5 outline-slate-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow-sm before:transition-transform before:duration-150 peer-checked:bg-indigo-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-indigo-500">
                                            <span class="sr-only">Pay Yearly</span>
                                        </label>
                                    </div>
                                    <div class="text-sm text-slate-500 ml-2">Yearly <span class="text-emerald-500">(-20%)</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- # Platform -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-1" aria-hidden="true">
                        <div class="py-2 text-slate-900 font-medium mt-4">Support</div>
                    </div>
                    <!-- Account Access -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-2" aria-hidden="true">
                        <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Free and Open Source (FOSS)</div>
                    </div>
                    <!-- Custom Domains -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-3" aria-hidden="true">
                        <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">'Patch Tuesday' or other update cycle for stable</div>
                    </div>
                    <!-- Receipts Forward -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-4" aria-hidden="true">
                        <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Dev Channel flights</div>
                    </div>
                    <!-- Supplier Management -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-5" aria-hidden="true">
                        <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Bundled as part of an office suite</div>
                    </div>
                    <!-- # Features -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-6" aria-hidden="true">
                        <div class="py-2 text-slate-900 font-medium mt-4">Features</div>
                    </div>
                    <!-- Generate Public URLs -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-7" aria-hidden="true">
                        <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Fluent Design UI</div>
                    </div>
                    <!-- API Integrations -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-8" aria-hidden="true">
                        <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Basic text editing features</div>
                    </div>
                    <!-- Extra Add-ons -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-9" aria-hidden="true">
                        <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Extra text editing features</div>
                    </div>
                    <!-- Admin Roles -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-10" aria-hidden="true">
                        <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">In-app app updates</div>
                    </div>
                    <!-- Admin Roles -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-11" aria-hidden="true">
                        <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">Windows version support</div>
                    </div>
                    <!-- Enterprise Add-ons -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-12" aria-hidden="true">
                        <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">.NET version</div>
                    </div>
                    <!-- # Support -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-[13]" aria-hidden="true">
                        <div class="py-2 text-slate-900 font-medium mt-4">Support</div>
                    </div>
                    <!-- Custom Connection -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end max-md:hidden md:order-[14]" aria-hidden="true">
                        <div class="py-2 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-700">UI Framework</div>
                    </div>
                </section>
                <!-- End: Column with labels -->

                <!-- Essential table -->
                <section class="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl">
                    <div class="relative bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end">
                        <div class="grow mb-5">
                            <div class="text-3xl font-bold text-slate-900 dark:text-slate-200">UTE UWP</div>
                            <div class="text-sm text-slate-500">The stable, beautiful UWP text editor.</div>
                        </div>
                        <div class="pb-4 border-b border-slate-200 dark:border-slate-700">
                            <a class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-2.5 py-1.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group">
                                Get Started <span class="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                            </a>
                        </div>
                    </div>
                    <!-- # Platform -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-1">
                        <div class="py-2 text-slate-900 font-medium mt-4 md:sr-only">Platform</div>
                    </div>
                    <!-- Account Access -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-2">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span>Yes, under MIT License <span class="md:sr-only">Free and Open Source (FOSS)</span></span>
                        </div>
                    </div>
                    <!-- Custom Domains -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-3">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span>
								1 update monthly on Patch Tuesday<span class="md:sr-only">'Patch Tuesday' or other update cycle for stable</span></span>
                        </div>
                    </div>
                    <!-- Receipts Forward -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-4">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span>Yes, until 24 June 2024 <span class="md:sr-only">Dev Channel flights</span></span>
                        </div>
                    </div>
                    <!-- Supplier Management -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-5">
						<div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
							<span>
								<span class="md:sr-only">Bundled as part of an office suite</span>
							</span>
						</div>
                    </div>
                    <!-- # Features -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-6">
                        <div class="py-2 text-slate-900 font-medium mt-4 md:sr-only">Features</div>
                    </div>
                    <!-- Generate Public URLs -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-7">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span><span class="md:sr-only">Fluent Design UI</span></span>
                        </div>
                    </div>
                    <!-- API Integrations -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-8">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span><span class="md:sr-only">Basic text editing features</span></span>
                        </div>
                    </div>
                    <!-- Extra Add-ons -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-9">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span><span class="md:sr-only">Extra text editing features</span></span>
                        </div>
                    </div>
                    <!-- Admin Roles -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-10">
                        <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                            <span>
								<span class="md:sr-only">In-app updates</span>
							</span>
                        </div>
                    </div>
                    <!-- Admin Roles -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-11">
						<div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
							<svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
								<path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
							</svg>
							<span>
								<span class="md:sr-only">Windows version support </span> Windows 10
							</span>
						</div>
                    </div>
                    <!-- Enterprise Add-ons -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-12">
                        <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                            <span><span class="md:sr-only">.NET version </span>.NET Standard</span>
                        </div>
                    </div>
                    <!-- # Support -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-[13]">
                        <div class="py-2 text-slate-900 font-medium mt-4 sr-only">Support</div>
                    </div>
                    <!-- Custom Connection -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-[14]">
                        <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                            <span><span class="md:sr-only">UI Framework </span>UWP</span>
                        </div>
                    </div>
                </section>
                <!-- End: Essential table -->

                <!-- Perform table -->
                <section class="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl dark">
                    <div class="relative bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end">
                        <div class="absolute top-0 right-0 mr-6 -mt-4">
                            <div class="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
                        </div>
                        <div class="grow mb-5">
                            <div class="font-semibold text-slate-900 dark:text-slate-200 mb-0.5">Perform</div>
                            <div class="mb-1">
                                <span class="text-xl font-medium text-slate-900 dark:text-slate-200">$</span><span class="text-3xl font-bold text-slate-900 dark:text-slate-200" x-text="isAnnual ? '49' : '54'">49</span><span class="text-slate-500 font-medium">/mo</span>
                            </div>
                            <div class="text-sm text-slate-500">Unlimited placeholder texts.</div>
                        </div>
                        <div class="pb-4 border-b border-slate-200 dark:border-slate-700">
                            <a class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-2.5 py-1.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group" href="">
                                Get Started <span class="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                            </a>
                        </div>
                    </div>
                    <!-- # Platform -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-1">
                        <div class="py-2 text-slate-900 font-medium mt-4 md:sr-only">Platform</div>
                    </div>
                    <!-- Account Access -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-2">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span>800 <span class="md:sr-only">Account Access</span></span>
                        </div>
                    </div>
                    <!-- Custom Domains -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-3">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span>10 <span class="md:sr-only">Custom Domains</span></span>
                        </div>
                    </div>
                    <!-- Receipts Forward -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-4">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span>Unlimited <span class="md:sr-only">Receipts Forward</span></span>
                        </div>
                    </div>
                    <!-- Supplier Management -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-5">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span>10 <span class="md:sr-only">Supplier Management</span></span>
                        </div>
                    </div>
                    <!-- # Features -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-6">
                        <div class="py-2 text-slate-900 font-medium mt-4 md:sr-only">Features</div>
                    </div>
                    <!-- Generate Public URLs -->
                    <div class="bg-white dark:bg-slate-900 px-4 lg:px-6 flex flex-col justify-end md:order-7">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span><span class="md:sr-only">Generate Public URLs</span></span>
                        </div>
                    </div>
                    <!-- API Integrations -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-8">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span><span class="md:sr-only">API Integrations</span></span>
                        </div>
                    </div>
                    <!-- Extra Add-ons -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-9">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span><span class="md:sr-only">Extra Add-ons</span></span>
                        </div>
                    </div>
                    <!-- Admin Roles -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-10">
                        <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                            <span><span class="md:sr-only">Admin Roles</span></span>
                        </div>
                    </div>
                    <!-- Admin Roles -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-11">
                        <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                            <span><span class="md:sr-only">Admin Roles</span></span>
                        </div>
                    </div>
                    <!-- Enterprise Add-ons -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-12">
                        <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                            <span><span class="md:sr-only">Enterprise Add-ons</span></span>
                        </div>
                    </div>
                    <!-- # Support -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[13]">
                        <div class="py-2 text-slate-900 font-medium mt-4 sr-only">Support</div>
                    </div>
                    <!-- Custom Connection -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[14]">
                        <div class="flex items-center border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 max-md:sr-only">
                            <span><span class="md:sr-only">Custom Connection</span></span>
                        </div>
                    </div>
                </section>
                <!-- End: Perform table -->

                <!-- Enterprise table -->
                <section class="md:contents [&>div:first-child]:pt-10 [&>div:first-child]:rounded-t-2xl [&>div:last-child]:pb-10 [&>div:last-child]:rounded-b-2xl">
                    <div class="relative bg-white dark:bg-slate-900 px-6 flex flex-col justify-end">
                        <div class="grow mb-5">
                            <div class="font-semibold text-slate-900 dark:text-slate-200 mb-0.5">Enterprise</div>
                            <div class="mb-1">
                                <span class="text-xl font-medium text-slate-900 dark:text-slate-200">$</span><span class="text-3xl font-bold text-slate-900 dark:text-slate-200" x-text="isAnnual ? '79' : '85'">79</span><span class="text-slate-500 font-medium">/mo</span>
                            </div>
                            <div class="text-sm text-slate-500">Unlimited placeholder texts.</div>
                        </div>
                        <div class="pb-4 border-b border-slate-200 dark:border-slate-700">
                            <a class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-2.5 py-1.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 group" href="">
                                Get Started <span class="tracking-normal text-indigo-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                            </a>
                        </div>
                    </div>
                    <!-- # Platform -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-1">
                        <div class="py-2 text-slate-900 font-medium mt-4 md:sr-only">Platform</div>
                    </div>
                    <!-- Account Access -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-2">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span>Unlimited <span class="md:sr-only">Account Access</span></span>
                        </div>
                    </div>
                    <!-- Custom Domains -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-3">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span>Unlimited <span class="md:sr-only">Custom Domains</span></span>
                        </div>
                    </div>
                    <!-- Receipts Forward -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-4">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span>Unlimited <span class="md:sr-only">Receipts Forward</span></span>
                        </div>
                    </div>
                    <!-- Supplier Management -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-5">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span>Unlimited <span class="md:sr-only">Supplier Management</span></span>
                        </div>
                    </div>
                    <!-- # Features -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-6">
                        <div class="py-2 text-slate-900 font-medium mt-4 md:sr-only">Features</div>
                    </div>
                    <!-- Generate Public URLs -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-7">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span><span class="md:sr-only">Generate Public URLs</span></span>
                        </div>
                    </div>
                    <!-- API Integrations -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-8">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span><span class="md:sr-only">API Integrations</span></span>
                        </div>
                    </div>
                    <!-- Extra Add-ons -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-9">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span><span class="md:sr-only">Extra Add-ons</span></span>
                        </div>
                    </div>
                    <!-- Admin Roles -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-10">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span><span class="md:sr-only">Admin Roles</span></span>
                        </div>
                    </div>
                    <!-- Admin Roles -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-11">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span><span class="md:sr-only">Admin Roles</span></span>
                        </div>
                    </div>
                    <!-- Enterprise Add-ons -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-12">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span><span class="md:sr-only">Enterprise Add-ons</span></span>
                        </div>
                    </div>
                    <!-- # Support -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[13]">
                        <div class="py-2 text-slate-900 font-medium mt-4 sr-only">Support</div>
                    </div>
                    <!-- Custom Connection -->
                    <div class="bg-white dark:bg-slate-900 px-6 flex flex-col justify-end md:order-[14]">
                        <div class="flex items-center h-full border-b border-slate-200 dark:border-slate-700 py-2 text-slate-600 dark:text-slate-400">
                            <svg class="shrink-0 fill-emerald-500 mr-3" xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                                <path d="M10.28.28 3.989 6.575 1.695 4.28A1 1 0 0 0 .28 5.695l3 3a1 1 0 0 0 1.414 0l7-7A1 1 0 0 0 10.28.28Z" />
                            </svg>
                            <span><span class="md:sr-only">Custom Connection</span></span>
                        </div>
                    </div>
                </section>
                <!-- End: Enterprise table -->
                
            </div>
            <!-- End: Feature Comparison Pricing Table component -->

        </div>
    </main>
    </body>