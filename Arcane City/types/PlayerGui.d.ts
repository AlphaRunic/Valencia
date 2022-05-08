interface PlayerGui extends BasePlayerGui {
	LoadScreen: ScreenGui & {
		Loading: TextLabel;
		Background: ImageLabel;
		Wheel: ImageLabel;
	};	
	Main: ScreenGui & {
		Interactions: Frame & {
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
					};
				};
			};
			UIPadding: UIPadding;
			NotificationCenter: Frame & {
				UIListLayout: UIListLayout;
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