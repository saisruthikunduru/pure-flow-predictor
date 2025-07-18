import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Droplets, Thermometer, Activity, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WaterParameters {
  ph: string;
  turbidity: string;
  chlorine: string;
  temperature: string;
  conductivity: string;
  hardness: string;
}

interface PredictionResult {
  quality: 'excellent' | 'good' | 'fair' | 'poor';
  score: number;
  potable: boolean;
  issues: string[];
}

const WaterQualityForm = () => {
  const [parameters, setParameters] = useState<WaterParameters>({
    ph: '',
    turbidity: '',
    chlorine: '',
    temperature: '',
    conductivity: '',
    hardness: ''
  });
  
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof WaterParameters, value: string) => {
    setParameters(prev => ({ ...prev, [field]: value }));
  };

  const analyzeWaterQuality = () => {
    // Validate inputs
    const requiredFields = Object.entries(parameters);
    const emptyFields = requiredFields.filter(([_, value]) => !value.trim());
    
    if (emptyFields.length > 0) {
      toast({
        title: "Missing Parameters",
        description: "Please fill in all water quality parameters for accurate analysis.",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);

    // Simulate analysis delay
    setTimeout(() => {
      const prediction = predictWaterQuality(parameters);
      setResult(prediction);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: `Water quality classified as ${prediction.quality}.`
      });
    }, 2000);
  };

  const predictWaterQuality = (params: WaterParameters): PredictionResult => {
    const ph = parseFloat(params.ph);
    const turbidity = parseFloat(params.turbidity);
    const chlorine = parseFloat(params.chlorine);
    const temperature = parseFloat(params.temperature);
    const conductivity = parseFloat(params.conductivity);
    const hardness = parseFloat(params.hardness);

    let score = 100;
    const issues: string[] = [];

    // pH analysis (optimal: 6.5-8.5)
    if (ph < 6.5 || ph > 8.5) {
      score -= 15;
      issues.push(ph < 6.5 ? "pH too acidic" : "pH too alkaline");
    }

    // Turbidity analysis (optimal: < 1 NTU)
    if (turbidity > 1) {
      score -= Math.min(turbidity * 10, 25);
      issues.push("High turbidity detected");
    }

    // Chlorine analysis (optimal: 0.2-2.0 mg/L)
    if (chlorine < 0.2 || chlorine > 2.0) {
      score -= 10;
      issues.push(chlorine < 0.2 ? "Insufficient disinfection" : "Excessive chlorine");
    }

    // Temperature analysis (optimal: 15-25°C)
    if (temperature < 15 || temperature > 25) {
      score -= 5;
      issues.push("Temperature outside optimal range");
    }

    // Conductivity analysis (optimal: < 800 μS/cm)
    if (conductivity > 800) {
      score -= Math.min((conductivity - 800) / 50, 20);
      issues.push("High dissolved solids");
    }

    // Hardness analysis (optimal: 60-120 mg/L)
    if (hardness > 180) {
      score -= 10;
      issues.push("Very hard water");
    }

    score = Math.max(0, score);

    let quality: 'excellent' | 'good' | 'fair' | 'poor';
    if (score >= 90) quality = 'excellent';
    else if (score >= 75) quality = 'good';
    else if (score >= 60) quality = 'fair';
    else quality = 'poor';

    return {
      quality,
      score: Math.round(score),
      potable: score >= 60,
      issues
    };
  };

  const getQualityColor = (quality: string) => {
    switch (quality) {
      case 'excellent': return 'bg-water-excellent text-white';
      case 'good': return 'bg-water-good text-white';
      case 'fair': return 'bg-water-fair text-white';
      case 'poor': return 'bg-water-poor text-white';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Form */}
      <Card className="bg-gradient-card shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Droplets className="h-6 w-6 text-primary" />
            Water Quality Parameters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="ph" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                pH Level
              </Label>
              <Input
                id="ph"
                type="number"
                step="0.1"
                min="0"
                max="14"
                placeholder="6.5 - 8.5"
                value={parameters.ph}
                onChange={(e) => handleInputChange('ph', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="turbidity" className="flex items-center gap-2">
                <Droplets className="h-4 w-4" />
                Turbidity (NTU)
              </Label>
              <Input
                id="turbidity"
                type="number"
                step="0.1"
                min="0"
                placeholder="< 1.0"
                value={parameters.turbidity}
                onChange={(e) => handleInputChange('turbidity', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="chlorine" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Chlorine (mg/L)
              </Label>
              <Input
                id="chlorine"
                type="number"
                step="0.1"
                min="0"
                placeholder="0.2 - 2.0"
                value={parameters.chlorine}
                onChange={(e) => handleInputChange('chlorine', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="temperature" className="flex items-center gap-2">
                <Thermometer className="h-4 w-4" />
                Temperature (°C)
              </Label>
              <Input
                id="temperature"
                type="number"
                step="0.1"
                placeholder="15 - 25"
                value={parameters.temperature}
                onChange={(e) => handleInputChange('temperature', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="conductivity">Conductivity (μS/cm)</Label>
              <Input
                id="conductivity"
                type="number"
                step="1"
                min="0"
                placeholder="< 800"
                value={parameters.conductivity}
                onChange={(e) => handleInputChange('conductivity', e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hardness">Hardness (mg/L CaCO₃)</Label>
              <Input
                id="hardness"
                type="number"
                step="1"
                min="0"
                placeholder="60 - 120"
                value={parameters.hardness}
                onChange={(e) => handleInputChange('hardness', e.target.value)}
              />
            </div>
          </div>

          <Button 
            onClick={analyzeWaterQuality}
            disabled={isAnalyzing}
            className="w-full"
            size="lg"
          >
            {isAnalyzing ? "Analyzing..." : "Analyze Water Quality"}
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      <Card className="bg-gradient-result shadow-medium">
        <CardHeader>
          <CardTitle>Analysis Results</CardTitle>
        </CardHeader>
        <CardContent>
          {result ? (
            <div className="space-y-6">
              <div className="text-center">
                <Badge className={`text-lg px-4 py-2 ${getQualityColor(result.quality)}`}>
                  {result.quality.toUpperCase()}
                </Badge>
                <div className="mt-4">
                  <div className="text-3xl font-bold text-primary">{result.score}/100</div>
                  <p className="text-sm text-muted-foreground">Quality Score</p>
                </div>
              </div>

              <div className="text-center p-4 rounded-lg bg-background">
                <p className="text-lg font-semibold">
                  {result.potable ? (
                    <span className="text-water-excellent">✅ Water is potable</span>
                  ) : (
                    <span className="text-water-poor">❌ Water requires treatment</span>
                  )}
                </p>
              </div>

              {result.issues.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Issues Detected:</h4>
                  <ul className="space-y-1">
                    {result.issues.map((issue, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-destructive rounded-full"></span>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Droplets className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Enter water quality parameters to see analysis results</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default WaterQualityForm;