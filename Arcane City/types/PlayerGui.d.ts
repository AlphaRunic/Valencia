interface PlayerGui extends BasePlayerGui {
	LoadScreen: ScreenGui & {
		Loading: TextLabel;
		Background: ImageLabel;
		Wheel: ImageLabel;
	};	
	Main: ScreenGui & {
		Interactions: Frame & {
			Shop: Frame & {
				ItemDisplay: Frame & {
					Shadow: Frame & {
						Description: TextLabel;
						Purchase: TextButton & {
							UICorner: UICorner;
							UIGradient: UIGradient;
							UITextSizeConstraint: UITextSizeConstraint;
						};
						ItemIcon: ViewportFrame & {
							Price: TextLabel;
							CoinIcon: ImageLabel & {
								UIAspectRatioConstraint: UIAspectRatioConstraint;
							};
							UIAspectRatioConstraint: UIAspectRatioConstraint;
							UICorner: UICorner;
						};
					};
				};
				Window: Frame & {
					List: ScrollingFrame & {
						UIPadding: UIPadding;
						UIGridLayout: UIGridLayout;
					};
					Title: TextLabel;
					Close: TextButton & {
						UIAspectRatioConstraint: UIAspectRatioConstraint;
						UICorner: UICorner;
					};
				};
			};
			UIPadding: UIPadding;
			NotificationCenter: Frame & {
				UIListLayout: UIListLayout;
			};
			Dialogue: Frame & {
				UIGradient: UIGradient;
				Next: TextButton & {
					UICorner: UICorner;
				};
				UICorner: UICorner;
				Content: TextLabel & {
					UITextSizeConstraint: UITextSizeConstraint;
				};
				Speaker: TextLabel;
			};
			Backpack: Frame & {
				Items: ScrollingFrame & {
					UIListLayout: UIListLayout;
					UIPageLayout: UIPageLayout;
				};
				ItemStorage: Frame & {
					Weapons: Folder;
					Hats: Folder;
					Robes: Folder;
					Boots: Folder;
					Charms: Folder;
				};
				Title: TextLabel;
				Close: TextButton & {
					UIAspectRatioConstraint: UIAspectRatioConstraint;
					UICorner: UICorner;
				};
				Actions: Frame & {
					UIListLayout: UIListLayout;
					Equip: ImageButton & {
						UIAspectRatioConstraint: UIAspectRatioConstraint;
						UICorner: UICorner;
					};
				};
				Categories: Frame & {
					Robes: ImageButton & {
						UIAspectRatioConstraint: UIAspectRatioConstraint;
						UICorner: UICorner;
					};
					Boots: ImageButton & {
						UIAspectRatioConstraint: UIAspectRatioConstraint;
						UICorner: UICorner;
					};
					UIListLayout: UIListLayout;
					Hats: ImageButton & {
						UIAspectRatioConstraint: UIAspectRatioConstraint;
						UICorner: UICorner;
					};
					Charms: ImageButton & {
						UIAspectRatioConstraint: UIAspectRatioConstraint;
						UICorner: UICorner;
					};
					Weapons: ImageButton & {
						UIAspectRatioConstraint: UIAspectRatioConstraint;
						UICorner: UICorner;
					};
				};
			};
		};		
		Game: Frame & {
			Stats: Frame & {
				Title: TextLabel;
				List: Frame & {
					Resist: TextLabel;
					UIGridLayout: UIGridLayout;
					Health: TextLabel;
					Damage: TextLabel;
				};
			};
			UIPadding: UIPadding;
			QuestInstructions: TextLabel;
			Level: TextLabel & {
				UIAspectRatioConstraint: UIAspectRatioConstraint;
			};
			Crystals: Frame & {
				Value: TextLabel;
				UIAspectRatioConstraint: UIAspectRatioConstraint;
				Icon: ImageLabel & {
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
				Add: TextButton & {
					UIAspectRatioConstraint: UIAspectRatioConstraint;
					UICorner: UICorner;
				};
			};
			XP: ImageLabel & {
				Bar: ImageLabel;
			};
			Gold: Frame & {
				Value: TextLabel;
				UIAspectRatioConstraint: UIAspectRatioConstraint;
				Icon: ImageLabel & {
					UIAspectRatioConstraint: UIAspectRatioConstraint;
				};
				Add: TextButton & {
					UIAspectRatioConstraint: UIAspectRatioConstraint;
					UICorner: UICorner;
				};
			};
		};
		Debug: Frame & {
			DataReceive: TextLabel;
			FPS: TextLabel;
			UIListLayout: UIListLayout;
			Heartbeat: TextLabel;
			DataSend: TextLabel;
			Memory: TextLabel;
		};
	};
}