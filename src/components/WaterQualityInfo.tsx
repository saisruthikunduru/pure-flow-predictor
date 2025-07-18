import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";

const WaterQualityInfo = () => {
  const standards = [
    {
      parameter: "pH Level",
      optimal: "6.5 - 8.5",
      description: "Measures acidity/alkalinity. Important for taste and disinfection effectiveness.",
      icon: "📊"
    },
    {
      parameter: "Turbidity",
      optimal: "< 1 NTU",
      description: "Cloudiness of water. High turbidity can harbor harmful microorganisms.",
      icon: "🌊"
    },
    {
      parameter: "Chlorine",
      optimal: "0.2 - 2.0 mg/L",
      description: "Disinfectant residual. Ensures protection against waterborne pathogens.",
      icon: "🧪"
    },
    {
      parameter: "Temperature",
      optimal: "15 - 25°C",
      description: "Affects taste and biological activity. Extreme temperatures indicate issues.",
      icon: "🌡️"
    },
    {
      parameter: "Conductivity",
      optimal: "< 800 μS/cm",
      description: "Indicates dissolved solids. High levels may affect taste and health.",
      icon: "⚡"
    },
    {
      parameter: "Hardness",
      optimal: "60 - 120 mg/L",
      description: "Calcium and magnesium content. Affects soap effectiveness and pipe scaling.",
      icon: "💎"
    }
  ];

  const qualityLevels = [
    {
      level: "Excellent",
      score: "90-100",
      color: "water-excellent",
      icon: CheckCircle,
      description: "Water meets all standards and is safe for consumption"
    },
    {
      level: "Good",
      score: "75-89",
      color: "water-good",
      icon: CheckCircle,
      description: "Water is generally safe with minor quality concerns"
    },
    {
      level: "Fair",
      score: "60-74",
      color: "water-fair",
      icon: AlertTriangle,
      description: "Water may need treatment before consumption"
    },
    {
      level: "Poor",
      score: "< 60",
      color: "water-poor",
      icon: XCircle,
      description: "Water requires significant treatment before use"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Quality Standards */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-center">Water Quality Standards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {standards.map((standard, index) => (
            <Card key={index} className="bg-gradient-card shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <span className="text-2xl">{standard.icon}</span>
                  {standard.parameter}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-3">
                  {standard.optimal}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {standard.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quality Classification */}
      <section>
        <h3 className="text-2xl font-bold mb-6 text-center">Quality Classification</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {qualityLevels.map((level, index) => {
            const IconComponent = level.icon;
            return (
              <Card key={index} className="bg-gradient-card shadow-soft">
                <CardContent className="pt-6">
                  <div className="text-center space-y-3">
                    <IconComponent className={`h-8 w-8 mx-auto text-${level.color}`} />
                    <div>
                      <h4 className="font-semibold">{level.level}</h4>
                      <Badge className={`bg-${level.color} text-white`}>
                        {level.score}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {level.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Important Notes */}
      <Card className="bg-gradient-card shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            Important Notes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              This tool provides estimates based on common water quality parameters. For official water quality assessment, consult certified laboratories.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              Water quality can vary by location and source. Regular testing is recommended for private wells and water systems.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              Additional parameters like bacterial content, heavy metals, and pesticides should be tested for comprehensive water safety assessment.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaterQualityInfo;