import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('all');
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [selectedDonate, setSelectedDonate] = useState<{ game: string; name: string } | null>(null);
  const [playerId, setPlayerId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const freeFireDonates = [
    { id: 1, name: 'Бриллианты 100', price: 'Бесплатно', icon: 'Gem' },
    { id: 2, name: 'Бриллианты 500', price: 'Бесплатно', icon: 'Gem' },
    { id: 3, name: 'Бриллианты 1000', price: 'Бесплатно', icon: 'Gem' },
    { id: 4, name: 'Elite Pass', price: 'Бесплатно', icon: 'Crown' },
  ];

  const freeFireSofts = [
    { id: 1, name: 'Aim Bot Pro', status: 'Актуально', icon: 'Target' },
    { id: 2, name: 'Speed Hack', status: 'Актуально', icon: 'Zap' },
    { id: 3, name: 'Wall Hack', status: 'Актуально', icon: 'Eye' },
    { id: 4, name: 'Auto Headshot', status: 'Актуально', icon: 'Crosshair' },
  ];

  const grandMobileDonates = [
    { id: 1, name: 'Монеты 1000', price: 'Бесплатно', icon: 'Coins' },
    { id: 2, name: 'Монеты 5000', price: 'Бесплатно', icon: 'Coins' },
    { id: 3, name: 'Премиум статус', price: 'Бесплатно', icon: 'Star' },
    { id: 4, name: 'VIP пакет', price: 'Бесплатно', icon: 'Crown' },
  ];

  const grandMobileSofts = [
    { id: 1, name: 'Aim Assistant', status: 'Актуально', icon: 'Target' },
    { id: 2, name: 'Speed Boost', status: 'Актуально', icon: 'Zap' },
    { id: 3, name: 'ESP Hack', status: 'Актуально', icon: 'Eye' },
    { id: 4, name: 'No Recoil', status: 'Актуально', icon: 'Crosshair' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#0F1535] to-[#0A0E27]">
      <nav className="border-b border-border/50 backdrop-blur-sm bg-background/30 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold neon-glow">GAME DONATES</h1>
          <div className="flex gap-4">
            <Button
              variant={activeSection === 'all' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('all')}
              className="hover:text-primary transition-colors"
            >
              <Icon name="Gamepad2" size={20} className="mr-2" />
              Все
            </Button>
            <Button
              variant={activeSection === 'freeFire' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('freeFire')}
              className="hover:text-primary transition-colors"
            >
              Free Fire
            </Button>
            <Button
              variant={activeSection === 'grandMobile' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('grandMobile')}
              className="hover:text-primary transition-colors"
            >
              Grand Mobile
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-5xl font-bold neon-glow">Бесплатные донаты и софты</h2>
          <p className="text-xl text-muted-foreground">
            Получи донаты и скачай софты для своей любимой игры
          </p>
        </div>

        {(activeSection === 'all' || activeSection === 'freeFire') && (
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://cdn.poehali.dev/projects/ed53825e-1440-4bdd-8d27-4ab557cbe8a8/files/967a1067-067c-44fa-a674-3961922bb1b4.jpg"
                alt="Free Fire"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <h3 className="text-4xl font-bold neon-glow-orange">Free Fire</h3>
            </div>

            <Tabs defaultValue="donates" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
                <TabsTrigger value="donates">
                  <Icon name="Gift" size={18} className="mr-2" />
                  Донаты
                </TabsTrigger>
                <TabsTrigger value="softs">
                  <Icon name="Download" size={18} className="mr-2" />
                  Софты
                </TabsTrigger>
              </TabsList>

              <TabsContent value="donates" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {freeFireDonates.map((donate) => (
                    <Card
                      key={donate.id}
                      className="p-6 card-glow card-glow-hover transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                          <Icon name={donate.icon} size={32} className="text-primary" />
                        </div>
                        <h4 className="text-xl font-semibold">{donate.name}</h4>
                        <Badge variant="secondary" className="text-lg px-4 py-1">
                          {donate.price}
                        </Badge>
                        <Button className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground">
                          Получить
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="softs" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {freeFireSofts.map((soft) => (
                    <Card
                      key={soft.id}
                      className="p-6 card-glow card-glow-hover transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                          <Icon name={soft.icon} size={32} className="text-secondary" />
                        </div>
                        <h4 className="text-xl font-semibold">{soft.name}</h4>
                        <Badge className="text-sm">{soft.status}</Badge>
                        <Button className="w-full" variant="outline">
                          <Icon name="Download" size={18} className="mr-2" />
                          Скачать
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>
        )}

        {(activeSection === 'all' || activeSection === 'grandMobile') && (
          <section>
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://cdn.poehali.dev/projects/ed53825e-1440-4bdd-8d27-4ab557cbe8a8/files/e07f115c-c428-40a4-bb07-e6ca4fb40c4e.jpg"
                alt="Grand Mobile"
                className="w-16 h-16 rounded-lg object-cover"
              />
              <h3 className="text-4xl font-bold text-[#8B5CF6] neon-glow">Grand Mobile</h3>
            </div>

            <Tabs defaultValue="donates" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
                <TabsTrigger value="donates">
                  <Icon name="Gift" size={18} className="mr-2" />
                  Донаты
                </TabsTrigger>
                <TabsTrigger value="softs">
                  <Icon name="Download" size={18} className="mr-2" />
                  Софты
                </TabsTrigger>
              </TabsList>

              <TabsContent value="donates" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {grandMobileDonates.map((donate) => (
                    <Card
                      key={donate.id}
                      className="p-6 card-glow card-glow-hover transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                          <Icon name={donate.icon} size={32} className="text-primary" />
                        </div>
                        <h4 className="text-xl font-semibold">{donate.name}</h4>
                        <Badge variant="secondary" className="text-lg px-4 py-1">
                          {donate.price}
                        </Badge>
                        <Button 
                          className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                          onClick={() => {
                            setSelectedDonate({ game: 'grandMobile', name: donate.name });
                            setDonateModalOpen(true);
                          }}
                        >
                          Получить
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="softs" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {grandMobileSofts.map((soft) => (
                    <Card
                      key={soft.id}
                      className="p-6 card-glow card-glow-hover transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                          <Icon name={soft.icon} size={32} className="text-secondary" />
                        </div>
                        <h4 className="text-xl font-semibold">{soft.name}</h4>
                        <Badge className="text-sm">{soft.status}</Badge>
                        <Button className="w-full" variant="outline">
                          <Icon name="Download" size={18} className="mr-2" />
                          Скачать
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>
        )}
      </main>

      <footer className="border-t border-border/50 mt-20 py-8 text-center text-muted-foreground">
        <p>© 2026 Game Donates. Все донаты и софты доступны бесплатно</p>
      </footer>

      <Dialog open={donateModalOpen} onOpenChange={setDonateModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">Получить донат</DialogTitle>
            <DialogDescription>
              {selectedDonate?.name} для {selectedDonate?.game === 'freeFire' ? 'Free Fire' : 'Grand Mobile'}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="playerId">ID игрока</Label>
              <Input
                id="playerId"
                placeholder="Введите ваш игровой ID"
                value={playerId}
                onChange={(e) => setPlayerId(e.target.value)}
                className="w-full"
              />
            </div>
            <Button
              className="w-full"
              onClick={async () => {
                if (!playerId) {
                  toast({
                    title: 'Ошибка',
                    description: 'Введите игровой ID',
                    variant: 'destructive'
                  });
                  return;
                }

                setIsLoading(true);
                try {
                  const response = await fetch('https://functions.poehali.dev/ba399f90-64a6-4718-8c50-719d4f47422f', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      game: selectedDonate?.game,
                      playerId: playerId,
                      donateName: selectedDonate?.name
                    })
                  });

                  const data = await response.json();

                  if (data.success) {
                    toast({
                      title: '✅ Донат отправлен!',
                      description: `${data.message}\nID транзакции: ${data.transactionId}\nОжидаемое время: ${data.estimatedTime}`
                    });
                    setDonateModalOpen(false);
                    setPlayerId('');
                  } else {
                    toast({
                      title: 'Ошибка',
                      description: data.error || 'Не удалось отправить донат',
                      variant: 'destructive'
                    });
                  }
                } catch (error) {
                  toast({
                    title: 'Ошибка сети',
                    description: 'Проверьте подключение к интернету',
                    variant: 'destructive'
                  });
                } finally {
                  setIsLoading(false);
                }
              }}
              disabled={isLoading}
            >
              {isLoading ? 'Отправка...' : 'Получить донат'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;