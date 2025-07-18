import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Droplets, Shield, BarChart3, FlaskConical } from "lucide-react";
import WaterQualityForm from "@/components/WaterQualityForm";
import WaterQualityInfo from "@/components/WaterQualityInfo";
import heroImage from "@/assets/hero-water.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("analyzer");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 lg:py-32">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
                <Droplets className="h-12 w-12" />
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              ML Water Potability
              <span className="block text-accent">Prediction System</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Machine learning-powered analysis using SVM algorithm trained on UCI Water Potability Dataset. 
              Get instant predictions with 69.51% accuracy based on 9 physicochemical parameters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-large"
                onClick={() => setActiveTab("analyzer")}
              >
                <FlaskConical className="mr-2 h-5 w-5" />
                Start ML Analysis
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => setActiveTab("standards")}
              >
                <BarChart3 className="mr-2 h-5 w-5" />
                View ML Results
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="analyzer" className="flex items-center gap-2">
              <FlaskConical className="h-4 w-4" />
              Water Analyzer
            </TabsTrigger>
            <TabsTrigger value="standards" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Quality Standards
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analyzer" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">ML Water Potability Prediction</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enter your water quality measurements below to get an ML-powered assessment 
                using Support Vector Machine algorithm trained on UCI Water Potability Dataset.
              </p>
            </div>
            <WaterQualityForm />
          </TabsContent>

          <TabsContent value="standards" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">ML Dataset & Algorithm Performance</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn about the UCI Water Potability Dataset features and compare 
                machine learning algorithm performance on water quality prediction.
              </p>
            </div>
            <WaterQualityInfo />
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Droplets className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">AquaML Analytics</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Machine learning-powered water potability prediction using UCI dataset and SVM algorithm.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
