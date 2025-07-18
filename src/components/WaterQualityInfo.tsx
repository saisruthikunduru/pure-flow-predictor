import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, XCircle, Info } from "lucide-react";

const WaterQualityInfo = () => {
  const mlFeatures = [
    {
      parameter: "pH Level",
      optimal: "6.5 - 8.5",
      description: "Acidity level of the water. Critical for taste and disinfection effectiveness.",
      icon: "📊"
    },
    {
      parameter: "Hardness",
      optimal: "60 - 120 mg/L",
      description: "Mineral content like calcium/magnesium. Affects soap effectiveness and pipe scaling.",
      icon: "💎"
    },
    {
      parameter: "Total Dissolved Solids",
      optimal: "< 500 mg/L",
      description: "Total dissolved solids (TDS) concentration in water.",
      icon: "🌊"
    },
    {
      parameter: "Chloramines",
      optimal: "1 - 4 mg/L",
      description: "Used to disinfect drinking water and provide residual protection.",
      icon: "🧪"
    },
    {
      parameter: "Sulfate",
      optimal: "< 250 mg/L",
      description: "Concentration of sulfate compounds. High levels can cause digestive issues.",
      icon: "⚗️"
    },
    {
      parameter: "Conductivity",
      optimal: "< 400 μS/cm",
      description: "Water's ability to carry electricity. Indicates dissolved ion content.",
      icon: "⚡"
    },
    {
      parameter: "Organic Carbon",
      optimal: "< 2 mg/L",
      description: "Organic pollutants that can harbor harmful microorganisms.",
      icon: "🌿"
    },
    {
      parameter: "Trihalomethanes",
      optimal: "< 80 μg/L",
      description: "By-product of disinfection processes. Potential carcinogen at high levels.",
      icon: "⚠️"
    },
    {
      parameter: "Turbidity",
      optimal: "< 1 NTU",
      description: "Clarity of water based on suspended particles. High turbidity harbors pathogens.",
      icon: "🔍"
    }
  ];

  const mlResults = [
    {
      algorithm: "Support Vector Machine",
      accuracy: "69.51%",
      description: "Best performing algorithm for water potability prediction",
      color: "water-excellent"
    },
    {
      algorithm: "XGBoost",
      accuracy: "65.54%", 
      description: "Gradient boosting ensemble method",
      color: "water-good"
    },
    {
      algorithm: "Naive Bayes",
      accuracy: "63.10%",
      description: "Probabilistic classifier with feature independence assumption",
      color: "water-fair"
    },
    {
      algorithm: "Logistic Regression",
      accuracy: "62.80%",
      description: "Linear model for binary classification",
      color: "water-fair"
    },
    {
      algorithm: "Decision Tree",
      accuracy: "58.38%",
      description: "Tree-based model with interpretable rules",
      color: "water-poor"
    }
  ];

  return (
    <div className="space-y-8">
      {/* ML Dataset Features */}
      <section>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">UCI Water Potability Dataset Features</h3>
          <p className="text-muted-foreground">9 key physicochemical parameters used in machine learning prediction</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mlFeatures.map((feature, index) => (
            <Card key={index} className="bg-gradient-card shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <span className="text-2xl">{feature.icon}</span>
                  {feature.parameter}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="mb-3">
                  {feature.optimal}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ML Algorithm Performance */}
      <section>
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Machine Learning Results</h3>
          <p className="text-muted-foreground">Performance comparison of different algorithms on water potability prediction</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mlResults.map((result, index) => (
            <Card key={index} className="bg-gradient-card shadow-soft">
              <CardContent className="pt-6">
                <div className="text-center space-y-3">
                  <div className="flex justify-center">
                    <Badge className={`bg-${result.color} text-white text-lg px-3 py-1`}>
                      {result.accuracy}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{result.algorithm}</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {result.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ML Techniques & Dataset Info */}
      <Card className="bg-gradient-card shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            Machine Learning Implementation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">ML Techniques Used</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  Feature Engineering & Data Normalization
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  Train-Test Splitting for Model Validation
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  Cross-validation and Bootstrapping
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  Classification Metrics (Precision, Recall, F1-score)
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Dataset Information</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  UCI Water Potability Dataset
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  9 physicochemical water quality features
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  Binary classification (Potable: 1, Not Potable: 0)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  SVM achieved best performance at 69.51% accuracy
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

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
              This tool provides ML-based estimates using algorithms trained on the UCI Water Potability Dataset. For official water quality assessment, consult certified laboratories.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              The SVM model achieves 69.51% accuracy, reflecting real-world complexity in water quality prediction.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              Additional parameters like bacterial content, heavy metals, and pesticides may be needed for comprehensive safety assessment.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaterQualityInfo;