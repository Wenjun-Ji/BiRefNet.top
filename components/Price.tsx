"use client"

import { Tabs, TabsList, TabsTrigger } from "../components/price-ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/price-ui/card"
import { CheckCircle2 } from "lucide-react"
import { Button } from "../components/price-ui/button"
import React, { useState } from "react"
import { cn } from "../lib/utils"

type PricingSwitchProps = {
  onSwitch: (value: string) => void
}

type PricingCardProps = {
  isYearly?: boolean
  title: string
  monthlyPrice?: number
  yearlyPrice?: number
  description: string
  features: string[]
  actionLabel: string
  popular?: boolean
  exclusive?: boolean
}

const PricingHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className="text-center">
    <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-900 sm:text-6xl mb-5">{title}</h1>
    <p className="text-xl pt-1">{subtitle}</p>
    <br />
  </section>
)

const PricingSwitch = ({ onSwitch }: PricingSwitchProps) => (
  <Tabs defaultValue="0" className="w-40 mx-auto" onValueChange={onSwitch}>
    <TabsList className="py-6 px-2">
      <TabsTrigger value="0" className="text-base">
        Monthly
      </TabsTrigger>
      <TabsTrigger value="1" className="text-base">
        Yearly
      </TabsTrigger>
    </TabsList>
  </Tabs>
)

const PricingCard = ({ isYearly, title, monthlyPrice, yearlyPrice, description, features, actionLabel, popular, exclusive }: PricingCardProps) => (
  <Card
    className={cn(`w-72 flex flex-col justify-between py-1 ${popular ? "border-rose-400" : "border-zinc-700"} mx-auto sm:mx-0`, {
      "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
        exclusive,
    })}>
    <div>
      <CardHeader className="pb-8 pt-4">
        {isYearly && yearlyPrice !== undefined && monthlyPrice !== undefined ? (
          <div className="flex justify-between">
            <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
            <div
              className={cn("px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white", {
                "bg-gradient-to-r from-orange-400 to-rose-400 dark:text-black ": popular,
              })}>
              Save ¥{monthlyPrice * 12 - yearlyPrice}
            </div>
          </div>
        ) : (
          <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
        )}
        <div className="flex gap-0.5">
          <h3 className="text-3xl font-bold">
            {isYearly && yearlyPrice !== undefined ? "¥" + yearlyPrice : monthlyPrice !== undefined ? "¥" + monthlyPrice : "Custom"}
          </h3>
          <span className="flex flex-col justify-end text-sm mb-1">
            {isYearly && yearlyPrice !== undefined ? "/year" : monthlyPrice !== undefined ? "/month" : null}
          </span>
        </div>
        <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {features.map((feature: string) => (
          <CheckItem key={feature} text={feature} />
        ))}
      </CardContent>
    </div>
    <CardFooter className="mt-2">
      <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
        {actionLabel}
      </Button>
    </CardFooter>
  </Card>
)

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
)

export default function Price() {
  const [isYearly, setIsYearly] = useState(false)
  const togglePricingPeriod = (value: string) => setIsYearly(parseInt(value) === 1)

  const plans = [
    {
      title: "Free",
      monthlyPrice: 0,  // Free plan, price is 0
      description: "Get started with basic background removal, up to 10 images per month",
      features: [
        "Up to 10 images per month",
        "Standard processing speed",
        "Resolution under 1080p",
        "Watermark on output",
        "Basic background removal accuracy",
      ],
      actionLabel: "Get Started",
    },
    {
      title: "Pro",
      monthlyPrice: 49,
      yearlyPrice: 499,  // Set yearly price
      description: "Ideal for small businesses and professionals, high-accuracy background removal",
      features: [
        "Up to 500 images per month",
        "Fast processing speed",
        "Support for up to 4K resolution images",
        "No watermark",
        "High-accuracy background removal",
        "Dedicated customer support",
      ],
      actionLabel: "Get Started",
      popular: true,  // Mark as recommended plan
    },
    {
      title: "Enterprise",
      price: "Custom",  // Custom price
      description: "Tailored for enterprises with unlimited image processing and customization",
      features: [
        "Unlimited images per month",
        "Super-fast processing speed, support for bulk processing",
        "No resolution limit (supports 8K)",
        "No watermark",
        "Custom background removal models",
        "API integration available",
        "Dedicated technical support and SLA",
      ],
      actionLabel: "Contact Sales",  // Contact sales button
      exclusive: true,  // Mark as exclusive plan
    },
  ]

  return (
    <div className="py-8">
      <PricingHeader title="Pricing Plans" subtitle="Choose the plan that suits you best" />
      <PricingSwitch onSwitch={togglePricingPeriod} />
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        {plans.map((plan) => {
          return <PricingCard key={plan.title} {...plan} isYearly={isYearly} />
        })}
      </section>
    </div>
  )
}
